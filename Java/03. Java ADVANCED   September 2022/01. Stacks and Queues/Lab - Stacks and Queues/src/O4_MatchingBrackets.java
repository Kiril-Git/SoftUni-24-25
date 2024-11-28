import java.util.Scanner;
import java.util.Stack;

public class O4_MatchingBrackets {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputExpression = sc.nextLine();
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < inputExpression.length(); i++) {

            if (inputExpression.charAt(i) == '(') {
                stack.push(i);

            }
            if (inputExpression.charAt(i) == ')') {
                int startIndex = stack.pop();
                int endIndex = i;

                for (int j = startIndex; j <= endIndex; j++) {
                    System.out.print(inputExpression.charAt(j));
                }
                System.out.println();
            }
        }
    }
}
