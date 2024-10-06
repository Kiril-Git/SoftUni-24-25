import java.util.Scanner;

public class O4_PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String textInput = scanner.nextLine();


        if(!validatePasswordLength(textInput)){
            System.out.println("Password must be between 6 and 10 characters");
        }
        if(!validatePasswordCharsType(textInput)){
            System.out.println("Password must consist only of letters and digits");
        }
        if(!validatePassDigitsNum(textInput)){
            System.out.println("Password must have at least 2 digits");
        }
        if (validatePasswordLength(textInput) &&
                validatePasswordCharsType(textInput) &&
                validatePassDigitsNum(textInput)) {
            System.out.println("Password is valid");
        }
    }



    private static boolean validatePasswordLength(String textInput) {

        return textInput.length() >= 6 && textInput.length() <= 10;
    }


    private static boolean validatePasswordCharsType(String textInput) {

        return textInput.matches("[a-zA-Z0-9]+");

    }

    private static boolean validatePassDigitsNum(String textInput) {

        int digitCounter = 0;

        for (int i = 0; i < textInput.length(); i++) {

            if (Character.isDigit(textInput.charAt(i))) {
                digitCounter++;
            }
        }
        return digitCounter >= 2;
    }


}
