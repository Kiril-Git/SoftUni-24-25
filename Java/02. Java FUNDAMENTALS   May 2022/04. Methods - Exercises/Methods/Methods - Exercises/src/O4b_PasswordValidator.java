import java.util.Scanner;

public class O4b_PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String textInput = scanner.nextLine();

        validatePassword(textInput);

    }

    private static boolean validatePasswordLength(String textInput) {

        if (textInput.length() < 6 || textInput.length() > 10) {

            System.out.println("Password must be between 6 and 10 characters");
            return false;
        }
        return true;
    }


    private static boolean validatePasswordCharsType(String textInput) {

        if (!textInput.matches("[a-zA-Z0-9]+")) {
            System.out.println("Password must consist only of letters and digits");
            return false;

        }
        return true;
    }


    private static boolean validatePassDigitsNum(String textInput) {

        int digitCounter = 0;

        for (int i = 0; i < textInput.length(); i++) {

            if (Character.isDigit(textInput.charAt(i))) {
                digitCounter++;
            }
        }

        if (digitCounter < 2) {
            System.out.println("Password must have at least 2 digits");
            return false;
        }
        return true;
    }

    private static void validatePassword(String textInput) {

        boolean isLengthValid = validatePasswordLength(textInput);
        boolean isCharsValid = validatePasswordCharsType(textInput);
        boolean isDigitsValid = validatePassDigitsNum(textInput);

        // If all validations pass
        if (isLengthValid && isCharsValid && isDigitsValid) {
            System.out.println("Password is valid");
        }
    }


}
