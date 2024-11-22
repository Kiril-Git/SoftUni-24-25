import java.util.Scanner;

public class O3_Substring {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String patternInput = sc.nextLine();
        String stringInput = sc.nextLine();

        int index = stringInput.indexOf(patternInput);

        while (index != -1) {

            stringInput = stringInput.replace(patternInput, "");
            index = stringInput.indexOf(patternInput);
        }

        System.out.println(stringInput);
    }
}
