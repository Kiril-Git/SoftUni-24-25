import java.util.Scanner;

public class O11_EvenNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int inputNum = Integer.parseInt(scanner.nextLine());

        while (inputNum % 2 != 0) {

            System.out.print("Please write an even number.");
            System.out.println();



            inputNum = Integer.parseInt(scanner.nextLine());
        }
        System.out.println("The number is: " + Math.abs(inputNum));
    }
}
