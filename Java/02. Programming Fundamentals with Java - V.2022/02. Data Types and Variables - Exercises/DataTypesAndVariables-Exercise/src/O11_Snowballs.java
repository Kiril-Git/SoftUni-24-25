import java.util.Scanner;

public class O11_Snowballs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int snowballNumber = Integer.parseInt(sc.nextLine());

        int snowballSnowPrint = 0;
        int snowballTimePrint = 0;
        int snowballQualityPrint = 0;
        int winner = 0;

        for (int i = 0; i < snowballNumber; i++) {

            int snowballSnow = Integer.parseInt(sc.nextLine());
            int snowballTime = Integer.parseInt(sc.nextLine());
            int snowballQuality = Integer.parseInt(sc.nextLine());

            int temp = 0;
            int sum = 0;

            temp = snowballSnow / snowballTime;
            sum = (int) Math.pow(temp, snowballQuality);

            if (sum > winner) {
                winner = sum;
                snowballSnowPrint = snowballSnow;
                snowballTimePrint = snowballTime;
                snowballQualityPrint = snowballQuality;
            }

        }

        System.out.printf("%d : %d = %d (%d)", snowballSnowPrint, snowballTimePrint, winner, snowballQualityPrint);
    }
}
