import java.util.*;

public class O4_BasicQueueOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] commandsInput = scanner.nextLine().split("\\s+");
        Deque<Integer> intStack = new ArrayDeque<>();

        int iterations = Integer.parseInt(commandsInput[0]);
        String[] intArray = scanner.nextLine().split("\\s+");

        for (int i = 0; i < iterations; i++) {

            intStack.offer(Integer.parseInt(intArray[i]));
        }

        iterations = Integer.parseInt(commandsInput[1]);
        for (int i = 0; i < iterations; i++) {

            intStack.poll();
        }

        iterations = Integer.parseInt(commandsInput[2]);

        if (intStack.isEmpty()) {
            System.out.println("0");
        }
        else if (intStack.contains(iterations)) {

            System.out.println("true");
        }
        else {
            System.out.println(Collections.min(intStack));
        }
    }
}
