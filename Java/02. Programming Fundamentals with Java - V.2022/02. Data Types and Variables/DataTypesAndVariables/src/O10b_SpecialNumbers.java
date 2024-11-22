import java.util.Scanner;

public class O10b_SpecialNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNumber = Integer.parseInt(sc.nextLine());

        for (int i = 1; i <= inputNumber; i++) {

            int sum = 0;
            int temp = i;

            while (temp > 0) {
                                                                //      125 % 10 = 5
                                                                //      125 / 10 = 12
                sum += temp % 10;
                temp /= 10;

            }
                if (sum == 5 || sum == 7 || sum == 11) {
                    System.out.println(i + " -> True");
                }
                else {
                    System.out.println(i + " -> False");

            }
        }
    }
}
