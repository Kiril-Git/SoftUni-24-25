import java.util.Arrays;
import java.util.Scanner;

public class O3_SumEvenNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] numsArr = sc.nextLine().split(" ");

        int sum = 0;

        for (int i = 0; i < numsArr.length; i++) {

            int num = Integer.parseInt(numsArr[i]);

            if (num % 2 == 0) {
                sum += num;
            }
        }

        System.out.println(sum);
    }
}
