import java.util.Scanner;

public class O7_NxNMatrix {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNum = sc.nextInt();

        print_NxN_Matrix(inputNum);



    }

    private static void print_NxN_Matrix(int inputNum) {

        for (int i = 0; i < inputNum; i++) {
            for (int j = 0; j < inputNum; j++) {
                System.out.print(inputNum + " ");
            }
            System.out.println();
        }
    }
}
