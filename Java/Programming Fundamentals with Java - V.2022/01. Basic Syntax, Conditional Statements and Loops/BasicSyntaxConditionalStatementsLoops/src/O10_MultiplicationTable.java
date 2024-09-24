import java.util.Scanner;

public class O10_MultiplicationTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int inputNum = Integer.parseInt(scanner.nextLine());
        int sum = 0;

        for (int i = 1; i <= 10; i++) {

            sum = inputNum * i;

            System.out.println(inputNum + " X " + i + " = " + sum);
        }
    }
}
