import java.util.Scanner;

public class O4b_BackIn30Min {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int h = Integer.parseInt(sc.nextLine());
        int m = Integer.parseInt(sc.nextLine());

        int timeInMin = h * 60 + m;
        int newTimeInMin = timeInMin + 30;

        // Calculate new hours and minutes
        int newHours = newTimeInMin / 60;
        int newMin = newTimeInMin % 60;

        // Adjust for 24-hour format
        if (newHours == 24) {
            newHours = 0;
        }

        // Print the result in the format hh:mm
        System.out.printf("%d:%02d", newHours, newMin);         //      %02d - 2 digits only, when one - add 0 in front of it
    }
}
