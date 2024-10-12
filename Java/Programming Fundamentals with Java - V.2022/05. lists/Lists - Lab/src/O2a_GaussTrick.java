import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O2a_GaussTrick {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> inputNums = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        List<Integer> outputNums = new ArrayList<>();

        for (int i = 0; i < inputNums.size() / 2; i++) {

            int sum = 0;
            int leftNum =  inputNums.get(i);
            int rightNum = inputNums.get(inputNums.size()- i -1);
            sum = leftNum + rightNum;

            outputNums.add(sum);
        }

        if (inputNums.size() % 2 != 0) {
            int midEl = inputNums.get(inputNums.size()/2);
            outputNums.add(midEl);
        }
        for (Integer el : outputNums) {
            System.out.print(el + " ");
        }
    }
}
