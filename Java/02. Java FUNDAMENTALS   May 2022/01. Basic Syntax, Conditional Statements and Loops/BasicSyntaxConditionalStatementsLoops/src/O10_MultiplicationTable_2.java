import java.util.Scanner;

public class O10_MultiplicationTable_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int inputNum = Integer.parseInt(scanner.nextLine());
        int multiplier = Integer.parseInt(scanner.nextLine());

        int sum = 0;

        if (multiplier > 10) {

            sum = inputNum * multiplier;
            System.out.println(inputNum + " X " + multiplier + " = " + sum);

        }
        else {
            for (int i = multiplier; i <= 10; i++) {

                sum = inputNum * i;
                System.out.println(inputNum + " X " + i + " = " + sum);
            }
        }
    }
}
