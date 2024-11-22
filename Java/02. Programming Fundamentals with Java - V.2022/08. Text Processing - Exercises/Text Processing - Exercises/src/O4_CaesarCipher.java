import java.util.Scanner;

public class O4_CaesarCipher {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputText = sc.nextLine().split(" ");
        String encryptedText = "";

        for (int i = 0; i < inputText.length; i++) {

            String tempString = inputText[i];

            for (int j = 0; j < tempString.length(); j++) {

                int tempChar = tempString.charAt(j);
                tempChar += 3;
                encryptedText += (char) tempChar;
            }
            if (i == inputText.length - 1) {
                break;
            }
            encryptedText += "#";
        }
        System.out.println(encryptedText);
    }
}
