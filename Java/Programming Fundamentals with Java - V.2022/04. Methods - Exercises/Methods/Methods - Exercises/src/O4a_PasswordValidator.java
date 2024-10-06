import java.util.Scanner;

public class O4a_PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String textInput = scanner.nextLine();

       /* You are currently calling validatePasswordLength(), validatePasswordCharsType(), and
       validatePassDigitsNum() multiple times in the same method, which could be optimized to avoid
       unnecessary repeated checks.
        You could store the result of each validation in a boolean variable and use those variables both
        for printing and for the final validation.
*/
        // Store validation results in boolean variables
        boolean isLengthValid = validatePasswordLength(textInput);
        boolean isCharsValid = validatePasswordCharsType(textInput);
        boolean isDigitsValid = validatePassDigitsNum(textInput);

        // Print corresponding error messages if validation fails
        if (!isLengthValid) {
            System.out.println("Password must be between 6 and 10 characters");
        }
        if (!isCharsValid) {
            System.out.println("Password must consist only of letters and digits");
        }
        if (!isDigitsValid) {
            System.out.println("Password must have at least 2 digits");
        }

        // If all validations pass
        if (isLengthValid && isCharsValid && isDigitsValid) {
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
