import java.util.Scanner;

public class O4a_CaesarCipher {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputText = sc.nextLine();
        String encryptedText = "";

        for (int i = 0; i < inputText.length(); i++) {

                int tempChar = inputText.charAt(i);
                tempChar += 3;
                encryptedText += (char) tempChar;

        }
        System.out.println(encryptedText);
    }
}
