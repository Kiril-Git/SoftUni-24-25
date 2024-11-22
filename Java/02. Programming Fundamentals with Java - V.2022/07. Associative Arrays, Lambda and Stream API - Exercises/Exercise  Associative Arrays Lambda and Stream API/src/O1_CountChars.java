import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class O1_CountChars {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] strOfChars = sc.nextLine().split("");
        Map<Character, Integer> charCount = new LinkedHashMap<>();

        for (int i = 0; i < strOfChars.length; i++) {
            char currentChar = strOfChars[i].charAt(0);

            if (charCount.containsKey(currentChar)) {
                charCount.put(currentChar, charCount.get(currentChar) + 1);
            }
            else {
                charCount.put(currentChar, 1);
            }
        }

        charCount.remove(' ');

        charCount.forEach((k, v) -> System.out.println(k + " -> " + v));
/*
        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());

        }
        */
    }
}
