import java.util.Scanner;

public class O9_SumOddNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int sum = 0;
        int numsCounter = 0;
        int currentNum = 1;

        while (numsCounter < n) {

            if(currentNum % 2 != 0) {
                System.out.println(currentNum);
                sum += currentNum;
                numsCounter++;

            }
            currentNum++;
        }
        System.out.println("Sum: " + sum);
    }
}
