import java.util.Scanner;

public class O4_BackIn30Min {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int h = Integer.parseInt(sc.nextLine());                //      ctrl + d - copy a line and pastes it bellow
        int m = Integer.parseInt(sc.nextLine());

        int timeInMin = h * 60 + m;

        int newTimeInMin = timeInMin + 30;
        double newHours = Math.floor(newTimeInMin / 60 );       //      int newHours = newTimeInMin / 60;
        double newMin = newTimeInMin - newHours * 60 ;          //      int newMin = newTimeInMin % 60;

        if (newHours == 24){
            newHours = 0;
        }

        if(newMin < 10) {
            System.out.printf("%.0f:0%.0f", newHours, newMin);
        }
        else {
            System.out.printf("%.0f:%.0f", newHours, newMin);
        }
    }
}
