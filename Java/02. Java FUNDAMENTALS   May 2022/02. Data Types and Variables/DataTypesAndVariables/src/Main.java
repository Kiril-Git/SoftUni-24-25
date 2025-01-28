import java.math.BigDecimal;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        BigDecimal num = new BigDecimal(sc.nextLine());
        num = num.add(BigDecimal.valueOf(2.5));

        System.out.println(new BigDecimal(num.toString()));
    }
}