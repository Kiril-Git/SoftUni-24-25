import java.util.Scanner;

public class O5_PrintPartOfASCIITable {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int startNum = Integer.parseInt(input.nextLine());
        int endNum = Integer.parseInt(input.nextLine());

        for (int i = startNum; i <= endNum; i++) {

            char character = (char) i;

            System.out.print(character + " ");
        }
    }
}
