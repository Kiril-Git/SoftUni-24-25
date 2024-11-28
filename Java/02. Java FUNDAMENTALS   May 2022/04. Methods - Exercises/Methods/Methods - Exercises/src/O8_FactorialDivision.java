import java.util.Scanner;

public class O8_FactorialDivision {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int firstNumber = Integer.parseInt(sc.nextLine());
        int secondNumber = Integer.parseInt(sc.nextLine());

        printFactorialDivision(firstNumber, secondNumber);




    }

    private static void printFactorialDivision(int firstNumber, int secondNumber) {

        Double firstFactorial = 1.0;
        Double secondFactorial = 1.0;

        for (int i = 1; i <= firstNumber; i++) {

            firstFactorial *= i;
        }

        for (int i = 1; i <= secondNumber; i++) {

            secondFactorial *= i;
        }
        System.out.printf("%.2f", firstFactorial / secondFactorial);
    }
}
