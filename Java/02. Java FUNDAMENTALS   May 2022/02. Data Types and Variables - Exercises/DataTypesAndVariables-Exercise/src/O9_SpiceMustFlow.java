import java.util.Scanner;

public class O9_SpiceMustFlow {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        final int AMOUNT_EATEN_PER_DAY = 26;
        final int DEPLETION_PER_DAY = 10;

        int inputNum = Integer.parseInt(sc.nextLine());

        int sumSpices = 0;
        int daysCounter = 0;

        while (inputNum >= 100) {

            sumSpices += inputNum;
            sumSpices -= AMOUNT_EATEN_PER_DAY;

            inputNum -= DEPLETION_PER_DAY;
            daysCounter++;

        }
        if (sumSpices >= AMOUNT_EATEN_PER_DAY) {
            sumSpices -= AMOUNT_EATEN_PER_DAY;
        } else {
            sumSpices = 0;                               // Ensure spice storage doesn't go negative
        }
        System.out.println(daysCounter);
        System.out.println(sumSpices);
    }
}
