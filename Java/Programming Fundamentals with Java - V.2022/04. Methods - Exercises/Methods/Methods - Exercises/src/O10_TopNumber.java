import java.util.Scanner;

public class O10_TopNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNum = sc.nextInt();

        printTopNums(inputNum);

    }


    private static void printTopNums(int inputNum) {

        for (int i = 1; i <= inputNum; i++) {

            int sum = 0;
            boolean odds = false;
            String temp = Integer.toString(i);

            for (int j = 0; j < temp.length(); j++) {

                int el = Integer.parseInt(temp.substring(j, j + 1));

                if (el % 2 != 0) {
                    odds = true;
                }
                sum += el;

            }
            if (sum % 8 == 0 && odds){
                System.out.println(i);
            }
        }
    }
}
