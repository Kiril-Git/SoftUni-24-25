import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O1a_SumAdjacentEqualNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Convert the input to a list of doubles
        List<Double> numsList = Arrays.stream(sc.nextLine().split(" "))
                .map(Double::parseDouble)
                .collect(Collectors.toList());

        boolean adjacent = true;

        // Continue summing adjacent equal numbers until no more are left
        while (adjacent) {
            adjacent = false;

            for (int i = 0; i < numsList.size() - 1; i++) {
                double tempOne = numsList.get(i);
                double tempTwo = numsList.get(i + 1);

                if (tempOne == tempTwo) {
                    // Sum the adjacent numbers
                    numsList.set(i, tempOne + tempTwo);
                    // Remove the second adjacent number
                    numsList.remove(i + 1);
                    adjacent = true;
                    break;  // Start checking again after modification
                }
            }
        }

        // Print the final result, ensuring all elements are printed
        for (double num : numsList) {
            System.out.print(num + " ");  // Remove Math.abs() to keep original numbers
        }
    }
}
