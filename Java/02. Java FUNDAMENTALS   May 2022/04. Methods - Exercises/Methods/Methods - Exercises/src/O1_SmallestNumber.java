import java.util.Scanner;

public class O1_SmallestNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int firstNum = sc.nextInt();
        int SecondNum = sc.nextInt();
        int thirdNum = sc.nextInt();

        printSmallestNum(firstNum, SecondNum, thirdNum);
    }



    private static void printSmallestNum(int firstNum, int secondNum, int thirdNum) {

        int smallestNumber = firstNum;

        if (secondNum < firstNum) {
            smallestNumber = secondNum;
        }
        if (thirdNum < smallestNumber) {
            smallestNumber = thirdNum;

        }
        System.out.println(smallestNumber);
    }


}
