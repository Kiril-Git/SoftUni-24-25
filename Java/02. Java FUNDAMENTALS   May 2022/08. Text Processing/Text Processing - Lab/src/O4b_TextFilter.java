import java.util.Scanner;

public class O4b_TextFilter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] bannedWords = sc.nextLine().split(", ");
        String textInput = sc.nextLine();

        for (String el : bannedWords) {

            textInput = textInput.replace(el, "*".repeat(el.length()));
        }

        System.out.println(textInput);
    }
}
