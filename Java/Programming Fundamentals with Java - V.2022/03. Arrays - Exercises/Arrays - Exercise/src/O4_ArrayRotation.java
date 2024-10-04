import java.util.Scanner;

public class O4_ArrayRotation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split(" ");
        int inputNum = Integer.parseInt(scanner.nextLine());

        String[] rotated = input;

        for (int i = 0; i < inputNum; i++){


            for (int j = rotated.length - 1; j >= 0; j--){
                rotated[j] = rotated[j - 1];
            }

            System.out.print(rotated[i] + " ");
        }

    }
}
