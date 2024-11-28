import java.time.LocalDate;
import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
Scanner sc = new Scanner(System.in);

/*        int year = Integer.parseInt(sc.nextLine());
        int month = Integer.parseInt(sc.nextLine());
        int day = Integer.parseInt(sc.nextLine());

        LocalDate birthdayDonga = LocalDate.of(year, month, day);

        birthdayDonga = birthdayDonga.plusDays(1);

        System.out.println(birthdayDonga);*/

        Random rand = new Random();
        int n = rand.nextInt(10) + 1;
        System.out.println(n);
    }
}