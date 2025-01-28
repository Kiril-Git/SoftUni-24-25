import java.util.Scanner;

public class O1_IntegerOperations {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int inputNumber1 = Integer.parseInt(input.nextLine());
        int inputNumber2 = Integer.parseInt(input.nextLine());
        int inputNumber3 = Integer.parseInt(input.nextLine());
        int inputNumber4 = Integer.parseInt(input.nextLine());

        int sum = inputNumber1 + inputNumber2;
        sum /= inputNumber3;
        sum *= inputNumber4;

        System.out.println(sum);
    }
}
