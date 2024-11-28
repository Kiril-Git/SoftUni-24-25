import java.util.Scanner;

public class O8_LettersChangeNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputStr =  sc.nextLine().split("\\s+");
        double total = 0.0;

        for (int i = 0; i < inputStr.length; i++) {
            String tempStr = inputStr[i];
            double sum = 0.0;

            char leftLetter = tempStr.charAt(0);
            char rightLetter = tempStr.charAt(tempStr.length() - 1);
            int tempNum = Integer.parseInt(tempStr.substring(1, tempStr.length() - 1));

            int leftPosition = Character.toLowerCase(leftLetter) - 'a' + 1;
            int rightPosition = Character.toLowerCase(rightLetter) - 'a' + 1;

            if (Character.isUpperCase(leftLetter)) {

                sum = (double) tempNum / leftPosition;
                total += sum;
            }
            else {
                sum = (double) tempNum * leftPosition;
                total += sum;
            }

            if (Character.isUpperCase(rightLetter)) {

                total -= rightPosition;
            }
            else {
                total += rightPosition;
            }
        }

        System.out.printf("%.2f\n", total);
    }
}
