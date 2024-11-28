import java.util.Scanner;

public class O1_ConvertMetersToKilometers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int meters = Integer.parseInt(sc.nextLine());

        double kilometers = meters / 1000.0;

        System.out.printf("%.2f", kilometers);
    }
}
