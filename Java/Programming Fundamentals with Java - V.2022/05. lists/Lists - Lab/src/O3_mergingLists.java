import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O3_mergingLists {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> firstList = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        List<Integer> secondList = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        List<Integer> outputList = new ArrayList<>();

        int littleListSize = Math.min(firstList.size(), secondList.size());

        for (int i = 0; i < littleListSize; i++) {

            outputList.add(firstList.get(i));
            outputList.add(secondList.get(i));
        }

        if (firstList.size() > littleListSize) {
            outputList.addAll(firstList.subList(littleListSize, firstList.size()));
        }
        else if (secondList.size() > littleListSize) {
            outputList.addAll(secondList.subList(littleListSize, secondList.size()));
        }

        for (int element : outputList) {
            System.out.print(element + " ");
        }
    }
}
