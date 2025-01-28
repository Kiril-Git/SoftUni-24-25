import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Scanner;

public class O6b_RecursiveFibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = Integer.parseInt(sc.nextLine());
        ArrayDeque<Long> fibonacciStack = new ArrayDeque<>();
        fibonacciStack.offer(0L);
        fibonacciStack.offer(1L);

        Long result = 0L;

        for (int i = 1; i <= n; i ++){

            Long firstNum = fibonacciStack.poll();
            Long secondNum = fibonacciStack.peek();
            result = firstNum + secondNum;

            fibonacciStack.offer(result);

        }

        System.out.println(fibonacciStack.getLast());

    }
}
