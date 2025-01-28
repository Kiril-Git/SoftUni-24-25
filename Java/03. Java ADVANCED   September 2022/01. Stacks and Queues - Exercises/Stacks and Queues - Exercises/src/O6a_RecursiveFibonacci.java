import java.util.HashMap;
import java.util.Scanner;

public class O6a_RecursiveFibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = Integer.parseInt(sc.nextLine());

        Long result = getFibonacci(n);


        System.out.println(result);

    }




    private static final HashMap<Integer, Long> memo = new HashMap<>();


    public static long getFibonacci(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }

        if (memo.containsKey(n)){
            return memo.get(n);
        }
        long result = getFibonacci(n - 1) + getFibonacci(n - 2);
        memo.put(n, result);
        return result;
    }


}
