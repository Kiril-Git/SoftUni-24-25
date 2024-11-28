import java.util.Arrays;
import java.util.Scanner;

public class O1a_ValidUsernames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Arrays.stream(scanner.nextLine().split(", "))
                .filter(O1a_ValidUsernames::isValid)
                .forEach(System.out::println);
    }

    // Method to check if a username is valid
    static boolean isValid(String username) {
        // The regex checks for 3 to 16 characters, allowing letters, digits, hyphens, and underscores
        return username.matches("[a-zA-Z0-9\\-_]{3,16}");
    }
}
