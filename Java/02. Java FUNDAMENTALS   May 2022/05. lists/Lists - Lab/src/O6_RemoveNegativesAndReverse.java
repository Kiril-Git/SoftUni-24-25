import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O6_RemoveNegativesAndReverse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> intList = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());


        intList.removeIf(el -> el < 0);
        Collections.reverse(intList);

        if (intList.isEmpty()) {
            System.out.println("empty");
        }
        else {
            for (int el : intList) {
                System.out.print(el + " ");
            }
        }

    }
}
