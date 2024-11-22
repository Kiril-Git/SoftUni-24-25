import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O2а_AdAstra {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String inputReg = scanner.nextLine();
        Pattern patternReg = Pattern.compile("([#|])([A-Za-z\\s]+)\\1([0-9]{2}/[0-9]{2}/[0-9]{2})\\1([0-9]+)\\1");

        Matcher matcherReg = patternReg.matcher(inputReg);
        int totalCalories = 0;

        while (matcherReg.find()) {
            String itemName = matcherReg.group(2);
            String expDate = matcherReg.group(3);
            int calories = Integer.parseInt(matcherReg.group(4));
            totalCalories += calories;

            System.out.printf("Item: %s, Best before: %s, Nutrition: %s\n", itemName, expDate, calories);
        }
        System.out.printf("You have food to last you for: %d days!", totalCalories / 2000);
    }


}
