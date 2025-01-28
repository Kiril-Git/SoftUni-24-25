import java.util.Scanner;

public class O3_PrintingTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        int inputNum = Integer.parseInt(sc.nextLine());

        printTriangle(inputNum);


    }

    public static void printTriangle(int num) {

        for (int i = 1; i <= num; i++) {
            System.out.println();

            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
        }

        for (int i = num-1; i >= 1; i--) {
            System.out.println();

            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
        }
    }
}
