import java.util.Scanner;

public class O10_PokeMon {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int power = Integer.parseInt(sc.nextLine());                    //  N
        int distance = Integer.parseInt(sc.nextLine());                 //  M
        int exhaustionFactor = Integer.parseInt(sc.nextLine());         //  Y

        int operationalPower = power;
        int targetsCount = 0;

        while (operationalPower >= distance) {

            operationalPower -= distance;
            targetsCount++;

            if (power % 2 == 0 && operationalPower == power / 2 && exhaustionFactor > 0) {

                operationalPower /=  exhaustionFactor;
            }

        }
        System.out.println(operationalPower);
        System.out.println(targetsCount);

    }
}
