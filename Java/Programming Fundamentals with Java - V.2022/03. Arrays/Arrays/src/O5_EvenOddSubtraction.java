import java.util.Scanner;

public class O5_EvenOddSubtraction {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] intArr = sc.nextLine().split(" ");

        int sumOdds = 0;
        int sumEvens = 0;

        for (int i = 0; i < intArr.length; i++) {

            int temp = Integer.parseInt(intArr[i]);

            if (temp % 2 == 0) {
                sumEvens += temp;
            }
            else {
                sumOdds += temp;
            }
        }
        System.out.println(sumEvens - sumOdds);
    }
}
