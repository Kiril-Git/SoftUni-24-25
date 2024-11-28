import java.util.Scanner;

public class O10_PadawanEquipment {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        final double LIGHTSABER_EXTRA_PERCENT_FACTOR = 1.10;       // 10% extra lightsabers due to breakage
        final int FREE_BELT_THRESHOLD = 6;                          // Every 6th belt is free

        double budget = Double.parseDouble(sc.nextLine());
        int students = Integer.parseInt(sc.nextLine());
        double lightsabersPrice  = Double.parseDouble(sc.nextLine());
        double robesPrice = Double.parseDouble(sc.nextLine());
        double bellsPrice = Double.parseDouble(sc.nextLine());
        int belts = students;

        if (belts >= FREE_BELT_THRESHOLD) {
            belts /= FREE_BELT_THRESHOLD;
            belts = students - belts;
        }

        double sumLightsabers = Math.ceil(students * LIGHTSABER_EXTRA_PERCENT_FACTOR) * lightsabersPrice;
        double sumRobes = students * robesPrice;
        double sumBelts = belts * bellsPrice;

        double sum = sumLightsabers + sumRobes + sumBelts;

        if (budget >= sum) {
            System.out.printf("The money is enough - it would cost %.2flv.", sum);
        }
        else {
            System.out.printf("George Lucas will need %.2flv more.", sum - budget);
        }
    }
}
