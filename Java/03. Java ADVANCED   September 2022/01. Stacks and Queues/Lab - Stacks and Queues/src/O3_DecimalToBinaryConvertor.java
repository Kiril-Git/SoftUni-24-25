import java.util.ArrayDeque;
import java.util.Scanner;

public class O3_DecimalToBinaryConvertor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputDecimal = Integer.parseInt(sc.nextLine());
        ArrayDeque<Integer> binaryStack = new ArrayDeque<>();

        if (inputDecimal == 0){
            binaryStack.push(0);
        }

        while (inputDecimal != 0) {

            binaryStack.push(inputDecimal % 2);
            inputDecimal = inputDecimal / 2;

        }

     for (Integer el : binaryStack) {
                System.out.print(el);
        }


/*    or:   int iterations = binaryStack.size();

        for (int i = 0; i < iterations; i++) {
            System.out.print(binaryStack.pop());
        }   */

    }
}
