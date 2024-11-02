import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class O5a_MultiplyBigNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String bigNumInput = sc.nextLine();
        int multiplier = Integer.parseInt(sc.nextLine());

        if (multiplier == 0) {
            System.out.println("0");
            return;
        }

        List<Integer> bugNumResult = new ArrayList<>();
        int carry = 0;

        for (int i = bigNumInput.length() - 1; i >= 0; i--) {
            int currentDigit = Character.getNumericValue(bigNumInput.charAt(i));
            int product = currentDigit * multiplier + carry;

            bugNumResult.add(0, product % 10);
            carry = product / 10;
        }

        if (carry != 0) {
            bugNumResult.add(0, carry);
        }

        for (int digit : bugNumResult) {
            System.out.print(digit);
        }
    }
}
