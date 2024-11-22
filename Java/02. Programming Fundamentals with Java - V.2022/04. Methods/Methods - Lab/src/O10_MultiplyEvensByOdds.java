import java.util.Scanner;

public class O10_MultiplyEvensByOdds {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNum = Math.abs(sc.nextInt());

        System.out.println(MultiplyEvensByOdds(inputNum));
    }




    private static int MultiplyEvensByOdds(int number) {

        String stringNum = String.valueOf(number);

        int sumEvens = 0;
        int sumOdds = 0;
        for (int i = 0; i < stringNum.length(); i++) {

            int temp = Integer.parseInt(stringNum.substring(i, i + 1));

            if (temp % 2 == 0) {
                sumEvens += temp;
            }
            else {
                sumOdds += temp;
            }
        }

        return sumEvens * sumOdds;
    }
}
