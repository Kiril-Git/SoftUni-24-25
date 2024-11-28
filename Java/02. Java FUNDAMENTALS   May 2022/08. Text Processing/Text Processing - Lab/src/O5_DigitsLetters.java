import java.util.Scanner;

public class O5_DigitsLetters {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputChars = sc.nextLine();

        StringBuilder digits = new StringBuilder();
        StringBuilder letters = new StringBuilder();
        StringBuilder others = new StringBuilder();

        for (int i = 0; i < inputChars.length(); i++) {
            char ch = inputChars.charAt(i);

            if (Character.isDigit(ch)) {
                digits.append(ch);
            }
            else if (Character.isLetter(ch)) {
                letters.append(ch);
            }
            else {
                others.append(ch);
            }
        }
        System.out.println(digits);
        System.out.println(letters);
        System.out.println(others);
    }
}
