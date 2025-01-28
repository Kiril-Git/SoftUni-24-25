import java.util.Scanner;

public class O6_MiddleCharacters {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputStr = sc.nextLine();

        printMiddleChars(inputStr);


    }


    private static void printMiddleChars(String inputStr) {

        int secondEll = inputStr.length() / 2;

        if (inputStr.length() % 2 == 0) {

            int firstEll = inputStr.length() / 2 -1;
            System.out.println(inputStr.charAt(firstEll) + "" + inputStr.charAt(secondEll));
        }
        else {
            System.out.println(inputStr.charAt(secondEll));
        }
    }
}

