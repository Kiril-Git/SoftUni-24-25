import java.util.Scanner;

public class O6_EqualSums {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputNums = sc.nextLine().split(" ");

        boolean No = false;
        boolean NoNo = true;

        for (int i = 0; i < inputNums.length; i++){
            int sumLeft = 0;
            int sumRight = 0;
            int ind = i;
            int num = Integer.parseInt(inputNums[i]);

            for (int j = 0; j < ind; j++){

                int leftNum = Integer.parseInt(inputNums[j]);
                sumLeft += leftNum;
                No = true;
            }

            for (int j = ind+1; j < inputNums.length; j++){
                int rightNum = Integer.parseInt(inputNums[j]);
                sumRight += rightNum;
                No = true;
            }
            if (sumLeft == sumRight){
                System.out.println(ind);
                NoNo = false;
            }
        }
        if (No && NoNo){

            System.out.println("no");
        }
    }
}
