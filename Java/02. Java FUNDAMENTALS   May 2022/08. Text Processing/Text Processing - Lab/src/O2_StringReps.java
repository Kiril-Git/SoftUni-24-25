import java.util.Scanner;

public class O2_StringReps {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputStr = sc.nextLine().split(" ");
        String result = "";

        for (int i = 0; i < inputStr.length; i++) {

            String tempStr = inputStr[i];

            for (int j = 0; j < tempStr.length(); j++) {
                result += tempStr;
            }
        }
        System.out.println(result);
    }
}
