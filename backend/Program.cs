using System.ComponentModel.DataAnnotations;
using Dapper;
using Npgsql;
using P1X1_shortlinker;

var builder = WebApplication.CreateBuilder(args);

// --- Add these two lines for diagnostics ---
Console.WriteLine($"Environment: {builder.Environment.EnvironmentName}");
Console.WriteLine($"Connection String: {builder.Configuration.GetConnectionString("DefaultConnection")}");
// -----------------------------------------

const string myAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("https://marco.gl", "http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
builder.Services.AddProblemDetails();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

await using (var connection = new NpgsqlConnection(connectionString))
{
    await connection.ExecuteAsync(@"
        CREATE TABLE IF NOT EXISTS Links (
            ShortCode TEXT PRIMARY KEY,
            OriginalUrl TEXT NOT NULL
        );
    ");
}

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler();
}

app.UseCors(myAllowSpecificOrigins);


app.MapPost("/", async (HttpContext context, UrlModel url) =>
{
    string shortCode;

    await using (var connection = new NpgsqlConnection(connectionString))
    {
        while (true)
        {
            // 1. generating a new code
            shortCode = GenerateRandomCode.Generate();

            // 2. then we check if it already exists in the database
            var existingCode = await connection.QuerySingleOrDefaultAsync<string>(
                "SELECT ShortCode FROM Links WHERE ShortCode = @ShortCode",
                new { ShortCode = shortCode });

            // 3. if it doesn't exist (null), break the loop
            if (string.IsNullOrEmpty(existingCode))
            {
                break;
            }

            // 4. if it exists, loop again
        }

        // 5. with the unique code, insert it
        var newLink = new { ShortCode = shortCode, OriginalUrl = url.UrlLink };
        await connection.ExecuteAsync(
            "INSERT INTO Links (ShortCode, OriginalUrl) VALUES (@ShortCode, @OriginalUrl)",
            newLink);
    }

    var baseUrl = $"{context.Request.Scheme}://{context.Request.Host}";
    var shortUrl = $"{baseUrl}/{shortCode}";

    return Results.Created(shortUrl, new { shortUrl, originalUrl = url.UrlLink });
}).WithParameterValidation();


app.MapGet("/{shortCode}", async (string shortCode) =>
{
    string? originalUrl;

    await using (var connection = new NpgsqlConnection(connectionString))
    {
        originalUrl = await connection.QuerySingleOrDefaultAsync<string>(
            "SELECT OriginalUrl FROM Links WHERE ShortCode = @ShortCode",
            new { ShortCode = shortCode });
    }

    return !string.IsNullOrEmpty(originalUrl)
        ? Results.Redirect(originalUrl)
        : Results.NotFound();
});


app.Run();


public record UrlModel
{
    [Required] [Url] public string UrlLink { get; init; } = null!;
}
