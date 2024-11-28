import java.util.Collections;
import java.util.Scanner;
import java.util.Stack;

public class O3_MaxElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int iterations = Integer.parseInt(scanner.nextLine());
        Stack<Integer> intStack = new Stack<>();

        for (int i = 0; i < iterations; i++) {
            String[] commands = scanner.nextLine().split("\\s+");

            switch (commands[0]) {
                case "1":
                    intStack.push(Integer.parseInt(commands[1]));
                    break;

                case "2":
                    intStack.pop();
                    break;

                case "3":
                    System.out.println(Collections.max(intStack));
            }
        }
    }
}
