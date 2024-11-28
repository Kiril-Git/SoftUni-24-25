import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O1_Furniture {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String furnitureDetailsInput = sc.nextLine();
        Pattern regexStr = Pattern.compile("^>>([A-Za-z]+)<<([0-9]+.?[0-9]*)!(\\d+)$");

        double totalPrice = 0;
        System.out.println("Bought furniture:");

        while (!furnitureDetailsInput.equals("Purchase")) {
            Matcher matcher = regexStr.matcher(furnitureDetailsInput);

            while (matcher.find()) {
                System.out.println(matcher.group(1));

                double price = Double.parseDouble(matcher.group(2));
                int quantity = Integer.parseInt(matcher.group(3));
                totalPrice += price * quantity;

            }
            furnitureDetailsInput = sc.nextLine();

        }
        System.out.printf("Total money spend: %.2f", totalPrice);

    }
}
