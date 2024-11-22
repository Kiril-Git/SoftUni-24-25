import java.util.Scanner;

public class O2_CharsMultiplier {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputStr = sc.nextLine().split(" ");

        String str1 = inputStr[0];
        String str2 = inputStr[1];

        if (str1.length() < str2.length()) {
            str1 = inputStr[1];
            str2 = inputStr[0];
        }
        int sum = 0;

        for (int i = 0; i < str2.length(); i++) {

            int char1 = str1.charAt(i);
            int char2 = str2.charAt(i);
            sum += char1 * char2;
        }

        for (int i = str2.length(); i < str1.length(); i++) {

            int tempChar = str1.charAt(i);
            sum += tempChar;
        }

        System.out.println(sum);
    }
}
