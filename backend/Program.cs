using System.ComponentModel.DataAnnotations;

var builder = WebApplication.CreateBuilder(args);

// --- Configure Services ---
builder.Services.AddProblemDetails();

var app = builder.Build();

// --- Configure Middleware ---
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler();
}

// This dictionary will hold your shortCode -> URL mappings
var codesAndUrls = new Dictionary<string, string>();

app.MapPost("/", (HttpContext context, UrlModel url) =>
{
    var shortCode = GenerateRandomCode.Generate();

    var baseUrl = $"{context.Request.Scheme}://{context.Request.Host}";
    var shortUrl = $"{baseUrl}/{shortCode}";

    codesAndUrls[shortCode] = url.urlLink;

    return Results.Created(shortUrl, new { shortUrl, originalUrl = url.urlLink });
}).WithParameterValidation();

app.MapGet("/{shortCode:alpha}",
    (string shortCode) => codesAndUrls.TryGetValue(shortCode, out var url)
        ? Results.Redirect(url)
        : Results.NotFound((object?)shortCode));

app.Run();

public record UrlModel
{
    [Required] [Url] public string urlLink { get; init; }
}
