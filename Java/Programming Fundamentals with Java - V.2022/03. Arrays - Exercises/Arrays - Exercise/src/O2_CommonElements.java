import java.util.Scanner;

public class O2_CommonElements {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] firstArr = sc.nextLine().split(" ");
        String[] secondArr = sc.nextLine().split(" ");

        for (int i = 0; i < secondArr.length; i++) {

            String secondEl = secondArr[i];

            for (int j = 0; j < firstArr.length; j++) {

                String firstEll = firstArr[j];

                if (firstEll.equals(secondEl)) {
                    System.out.print(secondEl + " ");
                }
            }
        }
    }
}
