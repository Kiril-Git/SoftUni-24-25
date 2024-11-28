import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class O6_ReplaceRepChars {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputText = sc.nextLine();
        List<Character> outputChars = new ArrayList<Character>();
        outputChars.add('1');

        for (int i = 0; i < inputText.length(); i++) {
            char ch = inputText.charAt(i);

            if (ch != outputChars.getLast()) {
                outputChars.add(ch);
            }
        }

        outputChars.removeFirst();

        for (int i = 0; i < outputChars.size(); i++) {
            System.out.print(outputChars.get(i));
        }
    }
}
