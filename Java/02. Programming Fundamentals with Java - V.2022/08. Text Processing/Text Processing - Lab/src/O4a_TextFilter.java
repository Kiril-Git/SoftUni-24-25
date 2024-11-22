import java.util.Scanner;

public class O4a_TextFilter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] bannedWords = sc.nextLine().split(", ");
        String textInput = sc.nextLine();

        for (String el : bannedWords) {
            String starPattern = buildStarPattern(el.length());
            textInput = textInput.replace(el, starPattern);
        }

        System.out.println(textInput);
    }

    private static String buildStarPattern(int length) {
        return "*".repeat(length); // Java 11+ repeat method
    }
}
