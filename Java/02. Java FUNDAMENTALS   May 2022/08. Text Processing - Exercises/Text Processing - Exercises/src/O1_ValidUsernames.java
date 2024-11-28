import java.util.Arrays;
import java.util.Scanner;

public class O1_ValidUsernames {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputUsername = sc.nextLine().split(", ");


        for (int i = 0; i < inputUsername.length; i++) {

            String temp = inputUsername[i];

            if (temp.length() >= 3 && temp.length() <= 16) {

                if (temp.matches("[a-zA-Z0-9-_]+")) {

                    System.out.println(temp);
                }
            }
        }
    }
}
