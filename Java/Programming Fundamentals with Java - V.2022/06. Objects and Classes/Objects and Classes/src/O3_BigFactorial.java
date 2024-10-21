import java.math.BigInteger;
import java.util.Scanner;

public class O3_BigFactorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = Integer.parseInt(sc.nextLine());

        BigInteger bigFactorial = new BigInteger("1");

        for (int i = 1; i <= n; i++) {

            bigFactorial = bigFactorial.multiply(BigInteger.valueOf(i));

        }
        System.out.println(bigFactorial);
    }
}
