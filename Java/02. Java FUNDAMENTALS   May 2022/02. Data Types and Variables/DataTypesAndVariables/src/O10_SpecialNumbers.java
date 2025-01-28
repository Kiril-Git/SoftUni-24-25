import java.util.Scanner;

public class O10_SpecialNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNumber = Integer.parseInt(sc.nextLine());

        for (int i = 1; i <= inputNumber; i++) {

                int sum = 0;
                String temp = String.valueOf(i);

            for (int j = 0; j < temp.length(); j++) {

                    sum += Integer.parseInt(temp.substring(j, j + 1));
            }

            if (sum == 5 || sum == 7 || sum == 11) {
                System.out.println(i + " -> True");
            }
            else {
                System.out.println(i + " -> False");
            }
            sum = 0;
        }
    }
}
