import java.util.Scanner;

public class O2_VowelsCount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String word = sc.nextLine();

        vowelsCounter(word);
    }


    private static void vowelsCounter(String text) {

        int vowelCount = 0;

        for (int i = 0; i < text.length(); i++) {

            char temp = Character.toLowerCase(text.charAt(i));

            if (temp == 'a' || temp == 'e' || temp == 'i' || temp == 'o' || temp == 'u') {
                vowelCount++;
            }
        }
        System.out.println(vowelCount);
    }



}
