import java.util.Scanner;

public class O4_SumOfChars {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = Integer.parseInt(sc.nextLine());

        int sum = 0;

        for (int i = 1; i <= n; i++) {

            char ch = sc.nextLine().charAt(0);
            int ascii = (int) ch;

            sum += ascii;

        }

        System.out.println("The sum equals: " + sum);


    }
}
