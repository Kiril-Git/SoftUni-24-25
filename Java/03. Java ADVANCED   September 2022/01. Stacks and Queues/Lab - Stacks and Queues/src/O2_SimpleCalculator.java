import java.util.ArrayDeque;
import java.util.Collections;
import java.util.Scanner;

public class O2_SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] input = sc.nextLine().split(" ");
        ArrayDeque<String> stack = new ArrayDeque<>();

        for (int i = input.length-1; i >= 0; i--){
            stack.push(input[i]);
        }
//  or        Collections.addAll(stack, input);

        int sum = 0;

        while ((stack.size() > 1)){
            sum = 0;
            int temp1 = Integer.parseInt(stack.pop());
            String operator = stack.pop();
            int temp2 = Integer.parseInt(stack.pop());

            if (operator.equals("+")){
                sum = temp1 + temp2;
                stack.push(String.valueOf(sum));
            }
            else if (operator.equals("-")){
                sum = temp1 - temp2;
                stack.push(String.valueOf(sum));
            }
        }

        System.out.println(sum);
// or        System.out.println(stack.pop());
    }
}
