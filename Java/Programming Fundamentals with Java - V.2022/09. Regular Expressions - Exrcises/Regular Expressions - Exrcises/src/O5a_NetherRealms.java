import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O5a_NetherRealms {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputs = sc.nextLine().split("\\s*,\\s*");

        for (String name : inputs) {
            int healthSum = 0;
            double damageSum = 0;

            Pattern healthRegex = Pattern.compile("[^0-9+\\-*/.]");
            Pattern damageRegex = Pattern.compile("[-+]?\\d+[.]?\\d*");
            Matcher matcher = healthRegex.matcher(name);

            // Calculate health
            while (matcher.find()) {
                char healthChar = matcher.group().charAt(0);
                healthSum += (int) healthChar;
            }

            matcher = damageRegex.matcher(name);

            // Calculate damage
            while (matcher.find()) {
                double damageValue = Double.parseDouble(matcher.group());
                damageSum += damageValue;
            }

            for (char c : name.toCharArray()) {
                if (c == '*') {
                    damageSum *= 2;
                } else if (c == '/') {
                    damageSum /= 2;
                }
            }

            System.out.printf("%s - %d health, %.2f damage\n",name, healthSum, damageSum);

        }
    }
}
