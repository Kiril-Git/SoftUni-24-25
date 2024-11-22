import java.util.Scanner;

public class O7_RepeatString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputStr = sc.nextLine();
        int repNum = Integer.parseInt(sc.nextLine());

        String outputStr = repeadString(inputStr, repNum);
        System.out.println(outputStr);

    }

    private static String repeadString(String str, int reps) {

        String output = "";

        for (int i = 0; i < reps; i++) {
            output += str;
        }
        return output;
    }
}
