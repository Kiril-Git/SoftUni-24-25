import java.util.Scanner;

public class O9_ArrayModifier {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] numsArr = sc.nextLine().split(" ");
        String inputCommand = sc.nextLine();

            while (!inputCommand.equals("end")) {

                String[] command = inputCommand.split(" ");

                if (command[0].equals("swap")) {
                    int ind1 = Integer.parseInt(command[1]);
                    int ind2 = Integer.parseInt(command[2]);
                    String temp = numsArr[ind1];
                    numsArr[ind1] = numsArr[ind2];
                    numsArr[ind2] = temp;
                }
                else if (command[0].equals("multiply")) {

                    int ind1 = Integer.parseInt(command[1]);
                    int ind2 = Integer.parseInt(command[2]);
                    int temp1 = Integer.parseInt(numsArr[ind1]);
                    int temp2 = Integer.parseInt(numsArr[ind2]);
                    int sum = temp1 * temp2;
                    numsArr[ind1] = String.valueOf(sum);

                }
                else if (command[0].equals("decrease")) {

                    for (int i = 0; i < numsArr.length; i++){

                        int tempEl = Integer.parseInt(numsArr[i]);
                        tempEl -= 1;
                        numsArr[i] = String.valueOf(tempEl);
                    }
                }
                inputCommand = sc.nextLine();
            }

            for (int i = 0; i < numsArr.length-1; i++) {

                System.out.printf("%s, ", numsArr[i]);
            }
        System.out.printf("%s", numsArr[numsArr.length-1]);
    }
}
