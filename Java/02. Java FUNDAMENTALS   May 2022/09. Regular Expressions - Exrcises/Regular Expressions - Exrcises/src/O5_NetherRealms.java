import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class O5_NetherRealms {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputs = sc.nextLine().split("\\s*,\\s*");
        List<String> demons = Arrays.stream(inputs)
                .sorted(String::compareTo)
                .collect(Collectors.toList());

        for (String name : demons) {
            int healthSum = 0;
            double damageSum = 0;

            Pattern healthRegex = Pattern.compile("[^0-9+\\-*/.]");
            Matcher healthMatcher = healthRegex.matcher(name);

            while (healthMatcher.find()) {
                healthSum += healthMatcher.group().charAt(0);
            }

            Pattern damageRegex = Pattern.compile("[-+]?\\d+(\\.\\d+)?");
            Matcher damageMatcher = damageRegex.matcher(name);

            while (damageMatcher.find()) {
                damageSum += Double.parseDouble(damageMatcher.group());
            }

            for (char c : name.toCharArray()) {
                if (c == '*') {
                    damageSum *= 2;
                } else if (c == '/') {
                    damageSum /= 2;
                }
            }

            System.out.printf("%s - %d health, %.2f damage%n", name, healthSum, damageSum);
        }
    }
}
