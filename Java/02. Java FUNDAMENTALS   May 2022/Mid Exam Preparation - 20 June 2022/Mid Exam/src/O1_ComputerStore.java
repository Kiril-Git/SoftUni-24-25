import java.util.Scanner;

public class O1_ComputerStore {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String input = sc.nextLine();

        double sum = 0;

        while (!input.equals("special") && !input.equals("regular")) {

            double partPrice = Double.parseDouble(input);

            if (partPrice < 0) {
                System.out.println("Invalid price!");
            }
            else {
                sum += partPrice;
            }

            input = sc.nextLine();
        }

        double tax = sum * 0.2;

        if (sum == 0){
            System.out.println("Invalid order!");
        }
        else if (input.equals("regular")) {
            System.out.println("Congratulations you've just bought a new computer!");
            System.out.printf("Price without taxes: %.2f$\n", sum);
            System.out.printf("Taxes: %.2f$\n", tax);
            System.out.println("-----------");
            System.out.printf("Total price: %.2f$\n", tax + sum);

        }
        else if (input.equals("special")) {
            System.out.println("Congratulations you've just bought a new computer!");
            System.out.printf("Price without taxes: %.2f$\n", sum);
            System.out.printf("Taxes: %.2f$\n", tax);
            System.out.println("-----------");
            System.out.printf("Total price: %.2f$\n", (tax + sum) * 0.9);

        }
    }
}
