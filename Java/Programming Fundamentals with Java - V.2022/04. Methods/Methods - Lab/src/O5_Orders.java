import java.util.Scanner;

public class O5_Orders {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        final double COFFEE_PRICE = 1.50;
        final double WATER_PRICE = 1.00;
        final double COKE_PRICE = 1.40;
        final double SNACKS_PRICE = 2.00;

        String product = sc.nextLine();
        int quantity = Integer.parseInt(sc.nextLine());

        switch (product) {
            case "coffee":
                calculateTotalPrice(quantity, COFFEE_PRICE);
                break;
            case "water":
                calculateTotalPrice(quantity, WATER_PRICE);
                break;
            case "coke":
                calculateTotalPrice(quantity, COKE_PRICE);
                break;
            case "snacks":
                calculateTotalPrice(quantity, SNACKS_PRICE);
                break;


        }
    }


    private static void calculateTotalPrice(int quantity, double price) {

        double totalPrice = quantity * price;
        System.out.printf("%.2f", totalPrice);
    }


}
