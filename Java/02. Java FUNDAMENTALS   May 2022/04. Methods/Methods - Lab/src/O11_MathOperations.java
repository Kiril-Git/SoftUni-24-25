import java.util.Scanner;

public class O11_MathOperations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputFirstNum = Integer.parseInt(sc.nextLine());
        String operator = sc.nextLine();
        int inputSecondNum = Integer.parseInt(sc.nextLine());


        System.out.println(calculateMathOperation(inputFirstNum, operator, inputSecondNum));



    }

    private static int calculateMathOperation(int firstNum, String operator, int secondNum) {

        int sum = 0;

        switch (operator) {

            case "+":
                sum = firstNum + secondNum;
                break;
            case "-":
                sum = firstNum - secondNum;
                break;
            case "*":
                sum = firstNum * secondNum;
                break;
            case "/":
                sum = firstNum / secondNum;
                break;
        }
        return sum;
    }
}
