import java.util.Scanner;

public class O1_SignOfIntegers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        int inputNum = Integer.parseInt(sc.nextLine());

        printSignOfInteger(inputNum);

    }


    public static void printSignOfInteger(int number){

        if(number > 0){
            System.out.printf("The number %d is positive.", number);
        }
        else if(number < 0){
            System.out.printf("The number %d is negative.", number);
        }
        else {
            System.out.println("The number 0 is zero.");
        }
    }


}
