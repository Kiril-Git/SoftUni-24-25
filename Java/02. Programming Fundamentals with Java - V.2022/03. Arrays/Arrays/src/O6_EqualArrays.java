import java.util.Scanner;

public class O6_EqualArrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] arr1 = sc.nextLine().split(" ");
        String[] arr2 = sc.nextLine().split(" ");

        int sum = 0;

        for (int i = 0; i < arr1.length; i++) {

            int temp1 = Integer.parseInt(arr1[i]);
            int temp2 = Integer.parseInt(arr2[i]);

            if (temp1 == temp2) {
                sum += temp1;

            }
            else {
                System.out.printf("Arrays are not identical. Found difference at %d index.", i);
                System.exit(0);

            }
        }

        System.out.printf("Arrays are identical. Sum: %d", sum);
    }
}
