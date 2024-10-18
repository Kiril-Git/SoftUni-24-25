import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O5a_BombNumbers {
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
        int end = powerValue;
        int start = powerValue;


        if (bombIndex + powerValue >= intList.size()) {
            end = intList.size() - bombIndex - 1;
        }
        if (bombIndex - powerValue < 0) {
            start = bombIndex;
        }


        for (int i = 0; i < end; i++) {

            intList.remove(bombIndex + 1);
        }

        for (int i = 0; i < start; i++) {

            intList.remove(bombIndex - 1);
            bombIndex--;
        }
        intList.remove(bombIndex);
    }


}
