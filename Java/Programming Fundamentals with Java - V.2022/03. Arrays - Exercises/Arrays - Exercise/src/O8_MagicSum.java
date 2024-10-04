import java.util.Scanner;

public class O8_MagicSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputNums = sc.nextLine().split(" ");
        int sum = Integer.parseInt(sc.nextLine());


        for (int i = 0; i < inputNums.length; i++) {

            int num = Integer.parseInt(inputNums[i]);

            for (int j = i+1; j < inputNums.length; j++) {

                int num2 = Integer.parseInt(inputNums[j]);

                if (num + num2 == sum) {

                    System.out.println(num + " " + num2);
                }
            }
        }
    }
}
