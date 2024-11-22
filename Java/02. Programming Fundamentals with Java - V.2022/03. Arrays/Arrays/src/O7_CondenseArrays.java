import java.util.Scanner;

public class O7_CondenseArrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] numsArr = sc.nextLine().split(" ");
        String[] condArr = new String[numsArr.length];

        if (numsArr.length == 1) {
            System.out.printf("%s is already condensed to number", numsArr[0]);
            System.exit(0);
        }

        while (condArr.length > 1){

            condArr = new String[numsArr.length-1];

            for (int i = 0; i < numsArr.length; i++) {

            int temp1 = Integer.parseInt(numsArr[i]);
            int temp2 = Integer.parseInt(numsArr[i+1]);

            condArr[i] = String.valueOf(temp1 + temp2);

            if (i == numsArr.length-2 ){

                numsArr = condArr;
                break;
            }
        }
        }
        System.out.println(condArr[0]);
    }
}
