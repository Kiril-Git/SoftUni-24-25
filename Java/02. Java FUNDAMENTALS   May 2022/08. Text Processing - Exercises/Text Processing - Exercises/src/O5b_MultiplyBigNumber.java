import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class O5b_MultiplyBigNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read inputs
        String bigNumInput = sc.nextLine().replaceFirst("^0+(?!$)", "");  // Remove leading zeros
        int multiplier = Integer.parseInt(sc.nextLine());

        // Edge case where multiplier is zero
        if (multiplier == 0) {
            System.out.println("0");
            return;
        }

        List<Integer> bugNumResult = new ArrayList<>();
        int carry = 0;

        // Iterate over each digit from the end of the big number string
        for (int i = bigNumInput.length() - 1; i >= 0; i--) {
            int currentDigit = Character.getNumericValue(bigNumInput.charAt(i));
            int product = currentDigit * multiplier + carry;

            bugNumResult.add(0, product % 10);  // Add the last digit of product
            carry = product / 10;  // Update carry for the next iteration
        }

        // Add remaining carry to the front if it exists
        while (carry > 0) {
            bugNumResult.add(0, carry % 10);
            carry /= 10;
        }

        // Print the result
        bugNumResult.forEach(System.out::print);
    }
}
