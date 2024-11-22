import java.util.Scanner;

public class O9_CenturiesToMinutes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int centuriesInput = Integer.parseInt(sc.nextLine());

        double years = centuriesInput * 100.0;
        double days = years * 365.2422;
        double hours = days * 24;
        double minutes = hours * 60;

        System.out.printf("%d centuries = %.0f years = %.0f days = %.0f hours = %.0f minutes",
                centuriesInput, years, days, hours, minutes);

    }
}
