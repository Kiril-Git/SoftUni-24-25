import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O4_ListManipulationsAdv {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> intList = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        String commands = sc.nextLine();

        while (!commands.equals("end")) {

            String[] command = commands.split(" ");

            switch (command[0]) {

                case "Contains":
                    contains(intList, command[1]);
                    break;

                case "Print":
                    if (command[1].equals("even")) {
                        printEvenNums(intList);
                    }
                    else if (command[1].equals("odd")) {
                        printOddNums(intList);
                    }
                    break;

                case "Get":
                    sumAllNums(intList);
                    break;

                case "Filter":

                        if (command[1].equals("<")) {

                            int number = Integer.parseInt(command[2]);
                            printSmallerNums(intList, number);
                        }
                        else if (command[1].equals(">")) {

                            int number = Integer.parseInt(command[2]);
                            printLargerNums(intList, number);
                        }
                        else if (command[1].equals("<=")) {

                            int number = Integer.parseInt(command[2]);
                            printSmallerOrEqualNums(intList, number);
                        }
                        else if (command[1].equals(">=")) {

                            int number = Integer.parseInt(command[2]);
                            printLargerOrEqualNums(intList, number);
                        }
                        break;
            }

            commands = sc.nextLine();
        }
    }

    private static void printLargerOrEqualNums(List<Integer> intList, int number) {
        for (int el : intList){
            if (el >= number){
                System.out.print(el + " ");
            }
        }
        System.out.println();
    }

    private static void printSmallerOrEqualNums(List<Integer> intList, int number) {
        for (int el : intList){
            if (el <= number){
                System.out.print(el + " ");
            }
        }
        System.out.println();
    }

    private static void printLargerNums(List<Integer> intList, int number) {
        for (int el : intList){
            if (el > number){
                System.out.print(el + " ");
            }
        }
        System.out.println();
    }

    private static void printSmallerNums(List<Integer> intList, int number) {

        for (int el : intList){
            if (el < number){
                System.out.print(el + " ");
            }
        }
        System.out.println();
    }

    private static void sumAllNums(List<Integer> intList) {

        int sum = 0;
        for (Integer el : intList) {
            sum += el;
        }
        System.out.println(sum);
    }

    private static void printOddNums(List<Integer> intList) {

        for (int el : intList){

            if(el % 2 != 0){
                System.out.print(el + " ");
            }
        }
        System.out.println();
    }

    private static void printEvenNums(List<Integer> intList) {

        for (int el : intList){

            if (el % 2 == 0){
                System.out.print(el + " ");
            }
        }
        System.out.println();
    }

    private static void contains(List<Integer> intList, String num) {

        int number = Integer.parseInt(num);

        if (intList.contains(number)){
            System.out.println("Yes");
        }
        else
        {
            System.out.println("No such number");
        }
    }
}
