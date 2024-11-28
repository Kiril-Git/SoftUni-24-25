import java.util.Scanner;

public class O1a_DayOfWeek {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputDay = Integer.parseInt(sc.nextLine());
        
        String day = "Invalid day!";

        String[] days = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};


            if (inputDay >= 1 && inputDay <= 7){

                 day = (days[inputDay-1]);
        }

        System.out.println(day);

    }
}
