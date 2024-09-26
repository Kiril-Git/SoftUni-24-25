import java.util.Scanner;

public class O2_Division {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int inputNum = Integer.parseInt(scanner.nextLine());
        int num = 0;

        if (inputNum % 10 == 0) {
            num = 10;
        }
        else if (inputNum % 7 == 0) {
            num = 7;
        }
        else if (inputNum % 6 == 0) {
            num = 6;
        }
        else if (inputNum % 3 == 0) {
            num = 3;
        }
        else if (inputNum % 2 == 0) {
            num = 2;
        }
        else {
            System.out.println("Not divisible");
            return;
        }
        System.out.println("The number is divisible by " + num);
    }
}
