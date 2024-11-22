import java.util.Scanner;

public class O5_AddAndSubtract {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int firstNum = sc.nextInt();
        int secondNum = sc.nextInt();
        int thirdNum = sc.nextInt();


        int sum = sumTwoDigits(firstNum, secondNum);
        int subtraction = subtractTwoDigits(sum, thirdNum);

        System.out.println(subtraction);

    }

    private static int subtractTwoDigits(int sum, int third) {

        return sum - third;
    }

    private static int sumTwoDigits(int first, int second) {

        return first + second;
    }
}
