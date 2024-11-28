import java.util.Scanner;

public class O4a_BackIn30Min {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Read hours and minutes from input
        int hours = Integer.parseInt(scanner.nextLine());
        int minutes = Integer.parseInt(scanner.nextLine());

        // Add 30 minutes to the current time
        minutes += 30;

        // If minutes exceed 59, adjust hours and minutes
        if (minutes >= 60) {
            hours += 1;
            minutes -= 60;
        }

        // If hours exceed 23, wrap around to 0 (24-hour format)
        if (hours >= 24) {
            hours = 0;
        }

        // Print the result in the format hh:mm, ensuring minutes are two digits
        System.out.printf("%d:%02d", hours, minutes);
    }
}
