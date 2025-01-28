import java.util.Scanner;

public class O2_PoundsToDollars {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        float inputPounds = Float.parseFloat(sc.nextLine());

        double dollars = (double)inputPounds * 1.36;

        System.out.printf("%.3f", dollars);
    }
}
