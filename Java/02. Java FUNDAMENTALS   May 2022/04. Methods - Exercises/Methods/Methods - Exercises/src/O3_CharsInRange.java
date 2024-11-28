import java.util.Scanner;

public class O3_CharsInRange {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char firstChar = sc.next().charAt(0);
        char secondChar = sc.next().charAt(0);

        printCharsInRange(firstChar, secondChar);


    }

    private static void printCharsInRange(char firstChar, char secondChar) {

        if (firstChar > secondChar) {
            for (int i = secondChar+1; i < firstChar; i++) {
                System.out.print((char) i + " ");
            }
        }
        else {
            for (int i = firstChar+1; i < secondChar; i++) {

                System.out.print((char) i + " ");
            }
        }
    }
}
