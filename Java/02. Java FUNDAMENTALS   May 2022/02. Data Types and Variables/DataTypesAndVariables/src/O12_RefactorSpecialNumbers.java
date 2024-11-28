import java.util.Scanner;

public class O12_RefactorSpecialNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNum = Integer.parseInt(sc.nextLine());

        for (int i = 1; i <= inputNum; i++) {

            int sum = 0;
            int temp = i;

            while (temp > 0) {

                sum += temp % 10;
                temp /= 10;

            }
            if (sum == 5 || sum == 7 || sum == 11) {
                System.out.printf("%d -> True\n",i);
            }
            else {
                System.out.printf("%d -> False\n",i);
            }

        }
    }
}
