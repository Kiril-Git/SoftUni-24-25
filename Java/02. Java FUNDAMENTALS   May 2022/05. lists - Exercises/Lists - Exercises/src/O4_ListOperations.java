import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O4_ListOperations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> intList = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        String commands = sc.nextLine();


        while (!commands.equals("End")) {

            String[] command = commands.split(" ");

            switch (command[0]) {

                case "Add":
                        intList.add(Integer.parseInt(command[1]));
                    break;

                case "Remove":

                    int index = Integer.parseInt(command[1]);

                    if (intList.size() > index && index >= 0) {
                        intList.remove(index);
                    }
                    else {
                        System.out.println("Invalid index");
                    }
                    break;

                case "Insert":

                    int ind = Integer.parseInt(command[2]);
                    int num = Integer.parseInt(command[1]);

                    insertNumAtIndex(intList, ind, num);
                    break;

                case "Shift":

                    String destination = command[1];
                    int times = Integer.parseInt(command[2]);

                    if (destination.equals("left")) {
                        shiftFirstElToTheBack(intList, times);
                    }
                    else if (destination.equals("right")) {
                        shiftLastElToTheFront(intList, times);
                    }
                    break;
            }

            commands = sc.nextLine();
        }

        for (Integer el : intList) {
            System.out.print(el + " ");
        }
    }

    private static void insertNumAtIndex(List<Integer> intList, int index, int num) {

        if (intList.size() >= index && index >= 0 ) {
            intList.add(index, num);
        }
        else {
            System.out.println("Invalid index");
        }
    }


    private static void shiftLastElToTheFront(List<Integer> intList, int times) {

        for (int i = 0; i < times; i++) {

            int temp = intList.removeLast();
            intList.addFirst(temp);
        }
    }

    private static void shiftFirstElToTheBack(List<Integer> intList, int times) {

        for (int i = 0; i < times; i++) {

            int temp = intList.removeFirst();
            intList.addLast(temp);
        }
    }


}
