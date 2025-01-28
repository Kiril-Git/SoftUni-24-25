import java.math.BigInteger;
import java.util.Scanner;

public class O11a_Snowballs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int snowballNumber = Integer.parseInt(sc.nextLine());

        int snowballSnowPrint = 0;
        int snowballTimePrint = 0;
        int snowballQualityPrint = 0;
        BigInteger winner = BigInteger.ZERO;

        for (int i = 0; i < snowballNumber; i++) {

            int snowballSnow = Integer.parseInt(sc.nextLine());
            int snowballTime = Integer.parseInt(sc.nextLine());
            int snowballQuality = Integer.parseInt(sc.nextLine());

            // Calculate temp and snowball value using BigInteger to prevent overflow
            BigInteger temp = BigInteger.valueOf(snowballSnow).divide(BigInteger.valueOf(snowballTime));
            BigInteger snowballValue = temp.pow(snowballQuality); // (temp ^ snowballQuality)

            if (snowballValue.compareTo(winner) > 0) {
                winner = snowballValue;
                snowballSnowPrint = snowballSnow;
                snowballTimePrint = snowballTime;
                snowballQualityPrint = snowballQuality;
            }
        }

        // Output the winning snowball details
        System.out.printf("%d : %d = %d (%d)%n", snowballSnowPrint, snowballTimePrint, winner, snowballQualityPrint);
    }
}
