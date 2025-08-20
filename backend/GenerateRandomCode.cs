using System.Text;

namespace P1X1_shortlinker;

public class GenerateRandomCode
{
    private static readonly Random Random = new Random();

    public static string Generate(int length = 6)
    {
        var strBuild = new StringBuilder();

        for (int i = 0; i < length; i++)
        {
            // Pick random uppercase A–Z
            int shift = Random.Next(0, 26);
            char letter = (char)(shift + 65);

            // Randomly lowercase
            if (Random.Next(0, 2) == 1)
            {
                letter = char.ToLower(letter);
            }

            strBuild.Append(letter);
        }

        return strBuild.ToString();
    }
}
