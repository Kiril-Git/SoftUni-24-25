import java.util.Scanner;

public class O5_TopIntegers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] input = sc.nextLine().split(" ");

        int maxInt = Integer.parseInt(input[0]);
        int index = 0;

        for (int i = 0; i < input.length; i++) {

            int currentInt = Integer.parseInt(input[i]);
            if (currentInt > maxInt) {
                maxInt = currentInt;
                index = i;
            }

        }
        for (int i = index; i < input.length; i++) {

            int firstInt = Integer.parseInt(input[i]);

            if (i == input.length-1) {
                System.out.println(firstInt);
            }
            else if (firstInt > Integer.parseInt(input[i + 1])) {

                System.out.print(firstInt + " ");
            }
        }
    }
}
