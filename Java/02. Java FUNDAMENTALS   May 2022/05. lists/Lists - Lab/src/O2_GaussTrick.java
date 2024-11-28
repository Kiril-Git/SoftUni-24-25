import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O2_GaussTrick {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> inputNums = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        int listSize = inputNums.size();

        for (int i = 0; i < listSize / 2; i++) {

            int leftNum =  inputNums.get(i);
            int rightNum = inputNums.get(inputNums.size()-1) ;
            int sum = leftNum + rightNum;

            inputNums.set(i, sum);
            inputNums.remove(inputNums.size() -1);
        }


        for (int el : inputNums) {
            System.out.print(el + " ");
        }
    }
}
