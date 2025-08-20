using System;
using System.Text;

public class GenerateRandomCode
{
    private static readonly Random _random = new Random();

    public static string Generate(int length = 6)
    {
        var str_build = new StringBuilder();

        for (int i = 0; i < length; i++)
        {
            // Pick random uppercase A–Z
            int shift = _random.Next(0, 26);
            char letter = (char)(shift + 65);

            // Randomly lowercase
            if (_random.Next(0, 2) == 1)
            {
                letter = char.ToLower(letter);
            }

            str_build.Append(letter);
        }

        return str_build.ToString();
    }
}
