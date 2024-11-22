import java.util.Scanner;

public class O7_WaterOverflow {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int inputNum = Integer.parseInt(input.nextLine());
        int capacity = 255;

        for (int i = 0; i < inputNum; i++) {

            int inputLitters = Integer.parseInt(input.nextLine());

            if (inputLitters <= capacity) {
                capacity -= inputLitters;
            }
            else {
                System.out.println("Insufficient capacity!");
            }
        }
        System.out.println(255 - capacity);
    }
}
