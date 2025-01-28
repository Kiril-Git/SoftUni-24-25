import java.util.Scanner;

public class O3_Vacation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        final double STUDENT_DISCOUNT_FACTOR = 0.85;
        final double BUSINESS_FREE_COUNT = 10;
        final double REGULAR_DISCOUNT_FACTOR = 0.95;

        int groupSize = Integer.parseInt(sc.nextLine());
        String groupType = sc.nextLine();
        String day = sc.nextLine();

        double price = 0.0;
        double total = 0.0;

        switch (groupType){

            case "Students":
                if (day.equals("Friday")){
                    price = 8.45;
                }
                else if (day.equals("Saturday")) {
                    price = 9.8;
                }
                else if (day.equals("Sunday")) {
                    price = 10.46;
                }
                total = price * groupSize;

                if (groupSize >= 30){
                    total *= STUDENT_DISCOUNT_FACTOR;
                }
                break;

                    case "Business":
                if (day.equals("Friday")){
                    price = 10.9;
                }
                else if (day.equals("Saturday")) {
                    price = 15.6;
                }
                else if (day.equals("Sunday")) {
                    price = 16;
                }
                if (groupSize >= 100){
                    groupSize -= BUSINESS_FREE_COUNT;
                }
                total = price * groupSize;
                break;

            case "Regular":
                if (day.equals("Friday")){
                    price = 15;
                }
                else if (day.equals("Saturday")) {
                    price = 20;
                }
                else if (day.equals("Sunday")) {
                    price = 22.5;
                }
                total = price * groupSize;

                if (groupSize >= 10 && groupSize <= 20){
                    total *= REGULAR_DISCOUNT_FACTOR;
                }
                break;
        }
        System.out.printf("Total price: %.2f", total);
    }
}
