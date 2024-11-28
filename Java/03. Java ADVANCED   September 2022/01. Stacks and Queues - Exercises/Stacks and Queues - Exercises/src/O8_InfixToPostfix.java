import java.util.ArrayDeque;
import java.util.Scanner;

public class O8_InfixToPostfix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] infixInput = scanner.nextLine().split(" ");

        ArrayDeque<String> outputQueue = new ArrayDeque<>();
        ArrayDeque<String> operatorsStack = new ArrayDeque<>();

        for (String token : infixInput) {
            if (isOperand(token)) {
                outputQueue.offer(token);
            } else if (isOperator(token)) {
                while (!operatorsStack.isEmpty() &&
                        precedence(operatorsStack.peek()) >= precedence(token) &&
                        !operatorsStack.peek().equals("(")) {
                    outputQueue.offer(operatorsStack.pop());
                }
                operatorsStack.push(token);
            } else if (token.equals("(")) {
                operatorsStack.push(token);
            } else if (token.equals(")")) {
                while (!operatorsStack.isEmpty() && !operatorsStack.peek().equals("(")) {
                    outputQueue.offer(operatorsStack.pop());
                }
                operatorsStack.pop(); // Remove the left parenthesis
            }
        }

        while (!operatorsStack.isEmpty()) {
            outputQueue.offer(operatorsStack.pop());
        }

        System.out.println(String.join(" ", outputQueue));
    }

    private static boolean isOperand(String token) {
        return token.matches("[a-z0-9]+"); // Matches numbers or variables
    }

    private static boolean isOperator(String token) {
        return token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/");
    }

    private static int precedence(String operator) {
        if (operator.equals("*") || operator.equals("/")) {
            return 2;
        } else if (operator.equals("+") || operator.equals("-")) {
            return 1;
        }
        return 0;
    }
}
