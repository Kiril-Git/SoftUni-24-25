import java.util.Scanner;

public class O4_TextFilter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] bannedWords = sc.nextLine().split(", ");
        String textInput = sc.nextLine();


        for (String el : bannedWords) {
                String starPattern = buildStarPattern(el);

                textInput = textInput.replaceAll(el, starPattern);
        }

        System.out.println(textInput);
    }



    private static String buildStarPattern(String bannedWord) {

        String pattern = "";
        for (int i = 0; i < bannedWord.length(); i++) {
            pattern += "*";
        }
        return pattern;
    }
}
