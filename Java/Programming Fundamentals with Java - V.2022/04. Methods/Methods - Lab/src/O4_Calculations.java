import java.util.Scanner;

public class O4_Calculations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String command = sc.nextLine();
        int firstNumber = Integer.parseInt(sc.nextLine());
        int secondNumber = Integer.parseInt(sc.nextLine());

        switch (command) {
            case "add":

                addNumbers(firstNumber, secondNumber);
                break;
                case "subtract":
                subtractNumbers(firstNumber, secondNumber);
                break;
                case "multiply":
                multiplyNumbers(firstNumber, secondNumber);
                break;
                case "divide":
                divideNumbers(firstNumber, secondNumber);
                break;
        }
    }



    private static void divideNumbers(int firstNum, int secondNum) {

                System.out.println(firstNum / secondNum);
        }


    private static void multiplyNumbers(int firstNum, int secondNum) {

            System.out.println(firstNum * secondNum);
    }


    private static void subtractNumbers(int firstNum, int secondNum) {

            System.out.println(firstNum - secondNum);
    }


    private static void addNumbers(int firstNum, int secondNum) {

            System.out.println(firstNum + secondNum);
    }


}
