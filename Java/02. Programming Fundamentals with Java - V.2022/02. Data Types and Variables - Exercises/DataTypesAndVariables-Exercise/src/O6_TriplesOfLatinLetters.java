import java.util.Scanner;

public class O6_TriplesOfLatinLetters {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNum = Integer.parseInt(sc.nextLine());

        for (int i = 0; i < inputNum; i++) {
            char firstChar = (char) ('a' + i);

            for (int j = 0; j < inputNum; j++) {
                char secondChar = (char) ('a' + j);

                for (int k = 0; k < inputNum; k++) {
                    char thirdChar = (char) ('a' + k);
                    System.out.printf("%c%c%c\n", firstChar, secondChar, thirdChar);

                }
            }
        }
    }
}
