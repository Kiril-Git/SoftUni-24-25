import java.util.Scanner;

public class O1a_Train {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int carriages = Integer.parseInt(sc.nextLine());
        int[] trainArr = new int[carriages];
        int totalPeepsOnTrain = 0;

        for (int i = 0; i < carriages; i++) {

            int peepsPerCarr = Integer.parseInt(sc.nextLine());

            trainArr[i] = peepsPerCarr;
            totalPeepsOnTrain += peepsPerCarr;

            System.out.print(trainArr[i] + " ");

        }
        System.out.println();
        System.out.println(totalPeepsOnTrain);
    }
}
