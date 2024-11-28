import java.util.Scanner;

public class O4_PrintAndSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int startNum = Integer.parseInt(sc.nextLine());
        int endNum = Integer.parseInt(sc.nextLine());

        int sum = 0;
        for (int i = startNum; i <= endNum; i++) {
            sum += i;
            System.out.print(i + " ");
        }

        System.out.println("\nSum: " + sum);
    }
}
