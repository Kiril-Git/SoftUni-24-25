import java.util.Scanner;

public class O4_ReverseArrayOfStrings {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputArr = sc.nextLine().split(" ");

        String[]strArrReversed = new String[inputArr.length];

        for (int i = 0; i < inputArr.length; i++) {

            String temp = inputArr[i];
            int index = inputArr.length - i - 1;
            strArrReversed[index] = temp;

        }
        for (int i = 0; i < strArrReversed.length; i++) {

            System.out.print(strArrReversed[i] + " ");

        }
    }
}
