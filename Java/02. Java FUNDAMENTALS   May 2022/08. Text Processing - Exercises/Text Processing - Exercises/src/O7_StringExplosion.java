import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class O7_StringExplosion {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputChars = sc.nextLine();
        List<Character> charList = new ArrayList<>();
        int explosionValue = 0;

        for (int i = 0; i < inputChars.length(); i++) {
            char tempChar = inputChars.charAt(i);

            if (tempChar == '>'){
                explosionValue += Character.getNumericValue(inputChars.charAt(i + 1));
                charList.add(tempChar);
                explosionValue--;
                i++;
            }
            else if (explosionValue > 0){
                explosionValue--;
            }
            else {
                charList.add(tempChar);
            }
        }
        for (Character character : charList) {
            System.out.print(character);
        }
    }
}
