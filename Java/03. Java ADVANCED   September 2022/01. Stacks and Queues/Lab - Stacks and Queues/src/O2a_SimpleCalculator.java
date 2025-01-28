import java.util.ArrayDeque;
import java.util.Scanner;

public class O2a_SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] input = sc.nextLine().split(" "); // Split the input into tokens
        ArrayDeque<String> stack = new ArrayDeque<>();

        // Reverse the input and push it into the stack
        for (int i = input.length - 1; i >= 0; i--) {
            stack.push(input[i]);
        }

        // Initialize the result with the first number
        int sum = Integer.parseInt(stack.pop());

        // Process the rest of the stack
        while (!stack.isEmpty()) {
            String operator = stack.pop(); // Get the operator
            int nextNumber = Integer.parseInt(stack.pop()); // Get the next number

            // Apply the operation
            if (operator.equals("+")) {
                sum += nextNumber;
            } else if (operator.equals("-")) {
                sum -= nextNumber;
            }
        }

        // Print the final result
        System.out.println(sum);
    }
}
