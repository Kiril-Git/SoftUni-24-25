import java.util.Scanner;
import java.util.Stack;

public class O2_BasicStackOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split("\\s+");

        int elCount = Integer.parseInt(input[0]);
        int elsToPop = Integer.parseInt(input[1]);
        int elToFind = Integer.parseInt(input[2]);

        input = scanner.nextLine().split("\\s+");
        Stack<Integer> intsStack = new Stack<>();

        int minNum = Integer.parseInt(input[0]);
        boolean match = false;

        for (int i = 0; i < elCount; i++) {
            intsStack.push(Integer.parseInt(input[i]));
        }

        for (int i = 0; i < elsToPop; i++) {
            intsStack.pop();
        }

        if (intsStack.isEmpty()) {
            System.out.println(0);
            return;
        }

        for (int el : intsStack){

            if (el == elToFind){
                match = true;
            }
            if (el < minNum){
                minNum = el;
            }
        }


        if (match) {
            System.out.println(true);
        }
        else {
            System.out.println(minNum);
        }
    }
}
