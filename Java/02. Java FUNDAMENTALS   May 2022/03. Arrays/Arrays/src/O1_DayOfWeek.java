import java.util.Scanner;

public class O1_DayOfWeek {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputDay = Integer.parseInt(sc.nextLine());

        String day = "Invalid day!";

        String[] days = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};

        for (int i = 1; i <= days.length; i++){

            if (i == inputDay){

                 day = (days[i-1]);
            }
        }
        System.out.println(day);

    }
}
