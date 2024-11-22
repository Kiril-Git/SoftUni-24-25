import java.util.Scanner;

public class O3_ZigZagArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int inputNum = Integer.parseInt(scanner.nextLine());
        String[] array1 = new String[inputNum];
        String[] array2 = new String[inputNum];

        for (int i = 0; i < inputNum; i++) {

            String[] inputLine = scanner.nextLine().split(" ");

                if (i % 2 == 0) {
                    array1[i] = inputLine[0];
                    array2[i] = inputLine[1];
                }
                else {
                    array2[i] = inputLine[0];
                    array1[i] = inputLine[1];
            }
        }
        for (int i = 0; i < inputNum; i++) {
            System.out.print(array1[i] + " ");
        }
        System.out.println();
        for (int i = 0; i < inputNum; i++) {
            System.out.print(array2[i] + " ");

        }
    }
}
