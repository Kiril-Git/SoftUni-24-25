import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O1a_Furniture {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern regexPattern = Pattern.compile(">>([A-Za-z]+)<<([0-9]+\\.?[0-9]*)!(\\d+)");
        double totalPrice = 0;

        String furnitureDetailsInput = sc.nextLine();
        System.out.println("Bought furniture:");

        while (!furnitureDetailsInput.equals("Purchase")) {
            Matcher matcher = regexPattern.matcher(furnitureDetailsInput);

            if (matcher.find()) {
                String furnitureName = matcher.group(1);
                System.out.println(furnitureName);

                double price = Double.parseDouble(matcher.group(2));
                int quantity = Integer.parseInt(matcher.group(3));
                totalPrice += price * quantity;
            }

            furnitureDetailsInput = sc.nextLine();
        }

        System.out.printf("Total money spent: %.2f%n", totalPrice);
    }
}
