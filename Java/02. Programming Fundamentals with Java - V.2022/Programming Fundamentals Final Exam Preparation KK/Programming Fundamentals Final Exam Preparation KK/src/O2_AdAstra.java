import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O2_AdAstra {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String inputReg = scanner.nextLine();
        Pattern patternReg = Pattern.compile("([#|])([A-Za-z\\s]+)\\1([0-9]{2}/[0-9]{2}/[0-9]{2})\\1([0-9]+)\\1");

        Matcher matcherReg = patternReg.matcher(inputReg);
        int totalCalories = 0;

        List<Food> productsList = new ArrayList<>();

        while (matcherReg.find()) {
            String itemName = matcherReg.group(2);
            String expDate = matcherReg.group(3);
            int calories = Integer.parseInt(matcherReg.group(4));
            totalCalories += calories;

            Food product = new Food(itemName, expDate, calories);
            productsList.add(product);
        }


        System.out.printf("You have food to last you for: %d days!\n", totalCalories / 2000);

        productsList.forEach(System.out::println);

    }

/*
        int days = productsList.stream().mapToInt(Food::getCalories).sum() / 2000;
*/



    static class Food {
        String name;
        String expDate;
        int calories;


        public Food(String name, String expDate, int calories) {
            this.name = name;
            this.expDate = expDate;
            this.calories = calories;
        }

        public int getCalories() {
            return calories;
        }

        @Override
        public String toString() {
            return String.format("Item: %s, Best before: %s, Nutrition: %s", name, expDate, calories);
        }
    }
}

        /*
            System.out.printf("Item: %s, Best before: %s, Nutrition: %s\n", itemName, expDate, calories);
*/