import java.util.Scanner;

public class O9_Orders {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double input = Double.parseDouble(sc.nextLine());
        double sum = 1;
        double total = 0;

        for (int i = 0; i < input; i++) {

            for (int j = 0; j < 3; j++) {
                double price = Double.parseDouble(sc.nextLine());

                sum *= price;
            }

            System.out.printf("The price for the coffee is: $%.2f\n", sum);
            total += sum;
            sum = 1;
        }
        System.out.printf("Total: $%.2f", total);
    }
}
