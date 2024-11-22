import java.util.Scanner;

public class O2_SumDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputNum = sc.nextLine();

        int sum = 0;

        for (int i = 0; i < inputNum.length(); i++) {
            int temp = Integer.parseInt(String.valueOf(inputNum.charAt(i)));

            sum += temp;
        }
        System.out.println(sum);
    }
}
