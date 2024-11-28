import java.util.Scanner;

public class O6_StrongNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputNum = sc.nextLine();
        int sum = 1;
        int total = 0;

        for (int i = 0; i < inputNum.length(); i++) {
            int number = Integer.parseInt(inputNum.substring(i, i + 1));

            for (int j = 1; j <= number; j++) {

                sum *= j;
            }
            total += sum;
            sum = 1;
        }

        if (total == Integer.parseInt(inputNum)) {
        System.out.println("yes");
    }
        else {
            System.out.println("no");
        }
    }
}
