import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[5];

        arr[0] = Integer.parseInt(sc.nextLine());
        arr[1] = Integer.parseInt(sc.nextLine());
        arr[2] = Integer.parseInt(sc.nextLine());
        arr[3] = 40;
        arr[4] = 50;

        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}