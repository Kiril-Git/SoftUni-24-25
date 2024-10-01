import java.util.Scanner;

public class O2_PrintNumbersInReverseOrder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNUm = Integer.parseInt(sc.nextLine());
        int[] numbers = new int[inputNUm];

        for (int i = inputNUm-1; i >= 0; i--) {
            numbers[i] = Integer.parseInt(sc.nextLine());
        }

        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");

        }

    }
}
