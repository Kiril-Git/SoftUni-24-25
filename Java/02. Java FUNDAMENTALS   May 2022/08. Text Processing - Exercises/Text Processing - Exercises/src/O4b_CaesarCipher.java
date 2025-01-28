import java.util.Scanner;

public class O4b_CaesarCipher {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read the input text
        String inputText = sc.nextLine();
        StringBuilder encryptedText = new StringBuilder();

        // Shift each character by 3 positions
        for (int i = 0; i < inputText.length(); i++) {
            char currentChar = inputText.charAt(i);
            encryptedText.append((char) (currentChar + 3));
        }

        // Print the encrypted text
        System.out.println(encryptedText);

        // Close the scanner
        sc.close();
    }
}
