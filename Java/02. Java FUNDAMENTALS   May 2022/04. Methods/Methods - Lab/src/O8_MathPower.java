import java.text.DecimalFormat;
import java.util.Scanner;

public class O8_MathPower {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double inputNum = Double.parseDouble(sc.nextLine());
        int powNum = Integer.parseInt(sc.nextLine());

        double result = exponentiation(inputNum, powNum);

        DecimalFormat df = new DecimalFormat("0.###");
        System.out.println( df.format(result));
    }



    private static double exponentiation(double number, int powValue) {

        double result = number;

        for (int i = 1; i < powValue; i++) {
            result *= number;
        }
        return result;
    }
}
