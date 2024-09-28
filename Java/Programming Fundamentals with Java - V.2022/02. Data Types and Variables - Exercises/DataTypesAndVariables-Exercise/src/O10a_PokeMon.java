import java.util.Scanner;

import java.util.Scanner;

public class O10a_PokeMon {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int power = Integer.parseInt(sc.nextLine());                    //  N
        int distance = Integer.parseInt(sc.nextLine());                 //  M
        int exhaustionFactor = Integer.parseInt(sc.nextLine());         //  Y

        int originalPower = power;
        int targetsCount = 0;

        while (power >= distance) {
            // Poke a target, subtract the distance from the power
            power -= distance;
            targetsCount++;

            // Check if power is exactly 50% of original power and division is possible
            if (power == originalPower / 2 && exhaustionFactor > 0) {
                power /= exhaustionFactor;
            }
        }

        // Output the remaining power and the number of targets poked
        System.out.println(power);
        System.out.println(targetsCount);
    }
}
