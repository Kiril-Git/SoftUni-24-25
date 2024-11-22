import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O5_BombNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> intList = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        List<Integer> bombData = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        int detonationNumber = bombData.get(0);
        int powerValue = bombData.get(1);
        int sum = 0;

        while (intList.contains(detonationNumber)){

            leftAndRight(powerValue, intList, detonationNumber);


        }


        for (int i = 0; i < intList.size(); i++) {
            sum += intList.get(i);
        }
        System.out.println(sum);
    }




    private static void leftAndRight(int powerValue, List<Integer> intList, int detonationNumber) {

        int bombIndex = intList.indexOf(detonationNumber);
        int end = bombIndex + powerValue;
        int start = bombIndex - powerValue;


        if (end >= intList.size()) {
            end = intList.size() - 1;
        }
        if (start < 0) {
            start = 0;
        }


        for (int i = start; i <= end; i++) {

            intList.remove(start);
        }
    }


}
