import java.util.Scanner;

public class O1_ReverseString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputString = sc.nextLine();

        while (!inputString.equals("end")) {

            String reversedString = "";
            for (int i = inputString.length()-1; i >= 0; i--) {

               char tempChar = inputString.charAt(i);
                reversedString += tempChar;
            }
            System.out.println(inputString + " = " + reversedString);


            inputString = sc.nextLine();
        }
    }
}
