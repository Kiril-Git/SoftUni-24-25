import java.util.Scanner;

public class O1b_ValidUsernames {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] inputUsernames = sc.nextLine().split(", ");

        for (String username : inputUsernames) {
            if (username.matches("[a-zA-Z0-9_-]{3,16}")) {
                System.out.println(username);
            }
        }
        sc.close();
    }
}
