import java.util.Scanner;

public class O7_VendingMachine {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        final double NUTS_PRICE = 2.0;
        final double WATER_PRICE = 0.7;
        final double CRISPS_PRICE = 1.5;
        final double SODA_PRICE = 0.8;
        final double COKE_PRICE = 1.0;

        String input = sc.nextLine();
        double sum = 0.0;

        while (!input.equals("Start")) {

            double coin = Double.parseDouble(input);
            if (coin == 2 || coin == 1 || coin == 0.5 || coin == 0.2 || coin == 0.1) {

                sum += coin;
            }
            else {
                System.out.printf("Cannot accept %.2f\n", coin);
            }

            input = sc.nextLine();
        }

        input = sc.nextLine();

        while (!input.equals("End")) {

            String product = input;
            double productPrice = 0;

            boolean invalidProduct = false;

            switch (product) {
                case "Nuts":
                    productPrice = NUTS_PRICE;
                    break;

                case "Water":
                    productPrice = WATER_PRICE;
                    break;

                case "Crisps":
                    productPrice = CRISPS_PRICE;
                    break;

                case "Soda":
                    productPrice = SODA_PRICE;
                    break;

                case "Coke":
                    productPrice = COKE_PRICE;
                    break;

                default:
                    invalidProduct = true;
                    break;
            }

            if (invalidProduct) {
                System.out.println("Invalid product");
            }
            else if (sum >= productPrice) {
                System.out.println("Purchased " + product);
                sum -= productPrice;
            }
            else {
                System.out.println("Sorry, not enough money");
            }

            input = sc.nextLine();
        }

        System.out.printf("Change: %.2f", sum);
    }
}
