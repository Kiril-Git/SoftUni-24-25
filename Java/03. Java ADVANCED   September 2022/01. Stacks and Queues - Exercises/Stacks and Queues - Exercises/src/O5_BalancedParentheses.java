import java.util.Scanner;
import java.util.Stack;

public class O5_BalancedParentheses {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String inputBrackets = scanner.nextLine();
        Stack<Character> stack = new Stack<>();

        for (char ch : inputBrackets.toCharArray()) {
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            } else {
                if (stack.isEmpty()) {
                    System.out.println("NO");
                    return;
                }
                char top = stack.pop();
                if ((ch == ')' && top != '(') ||
                        (ch == '}' && top != '{') ||
                        (ch == ']' && top != '[')) {
                    System.out.println("NO");
                    return;
                }
            }
        }

        System.out.println(stack.isEmpty() ? "YES" : "NO");
    }
}
