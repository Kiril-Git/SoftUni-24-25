import java.text.DecimalFormat;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O1_SumAdjacentEqualNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Double> numsList = Arrays.stream(sc.nextLine().split(" "))
                .map(Double::parseDouble).collect(Collectors.toList());

        boolean adjacent = true;

        while (adjacent) {

            adjacent = false;

            for (int i = 0; i < numsList.size() - 1; i++) {

                double tempOne = numsList.get(i);
                double tempTwo = numsList.get(i + 1);

                if (tempOne == tempTwo) {

                    numsList.set(i, tempOne + tempTwo);

                    numsList.remove(tempTwo);

                    adjacent = true;

                }

            }
        }

        for (double el : numsList) {

            DecimalFormat df = new DecimalFormat("0.#");
            String num = df.format(el);

            System.out.print(num + " ");
        }
    }
}
