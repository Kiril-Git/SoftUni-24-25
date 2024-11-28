import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class O5_MultiplyBigNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);            //      Remove leading zeros ↓

        String bigNumInput = sc.nextLine().replaceFirst("^0+(?!$)", "");
        int multiplier = Integer.parseInt(sc.nextLine());

        if (multiplier == 0){
            System.out.println("0");
            return;
        }

        List<Integer> bigNumResult = new ArrayList<>();
        int remainder = 0;

        for (int i = bigNumInput.length()-1; i >= 0 ; i--) {

            int sum = remainder;
            int lastDigit = Integer.parseInt(String.valueOf(bigNumInput.charAt(i)));

            sum += lastDigit * multiplier;
            remainder = sum % 10;
            bigNumResult.addFirst(remainder);
            remainder = sum / 10;
        }

        if(remainder != 0){
        bigNumResult.addFirst(remainder);
        }
        for (int el : bigNumResult) {
            System.out.print(el);
        }
    }
}
