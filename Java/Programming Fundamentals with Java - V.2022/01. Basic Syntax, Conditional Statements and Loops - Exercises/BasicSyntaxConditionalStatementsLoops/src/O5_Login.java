import java.util.Scanner;

public class O5_Login {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String textInput = sc.nextLine();
        String username = textInput;
        String password = "";
        int attempts = 0;

        for (int i = textInput.length()-1; i >= 0; i--) {

            char ch = textInput.charAt(i);
            password += ch;
        }

        textInput = sc.nextLine();

        while (!password.equals(textInput)){

            attempts++;
            if (attempts == 4){
                System.out.printf("User %s blocked!", username);
                return;
            }
            System.out.println("Incorrect password. Try again.");


            textInput = sc.nextLine();
        }

        System.out.printf("User %s logged in.", username);
    }
}
