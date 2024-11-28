import java.util.Scanner;

public class O1_Ages {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int age = Integer.parseInt(scanner.nextLine());
        String category = "";

        if (age >= 0 && age <= 2) {
            category = "baby";
        }
        else if (age <= 13) {
            category = "child";
        }
        else if (age <= 19) {
            category = "teenager";
        }
        else if (age <= 65) {
            category = "adult";
        }
        else {
            category = "elder";
        }
        System.out.println(category);
    }
}
