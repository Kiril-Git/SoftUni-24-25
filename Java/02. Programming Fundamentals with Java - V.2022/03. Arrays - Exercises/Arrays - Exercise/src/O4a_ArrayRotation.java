import java.util.Scanner;

public class O4a_ArrayRotation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

                                                                             // Read the input array as strings
        String[] input = scanner.nextLine().split(" ");
                                                                            // Read the number of rotations
        int inputNum = Integer.parseInt(scanner.nextLine());
                                                                            // Perform the rotations
        for (int i = 0; i < inputNum; i++) {
                                                                            // Store the first element temporarily
            String firstElement = input[0];
                                                                            // Shift all elements to the left
            for (int j = 0; j < input.length - 1; j++) {
                input[j] = input[j + 1];
            }
                                                                            // Move the first element to the last position
            input[input.length - 1] = firstElement;
        }
                                                                            // Print the rotated array
        System.out.println(String.join(" ", input));
    }
}
