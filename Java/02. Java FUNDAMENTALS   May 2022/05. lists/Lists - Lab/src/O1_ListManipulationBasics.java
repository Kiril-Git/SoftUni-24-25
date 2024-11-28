import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O1_ListManipulationBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> intList = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        String commands = sc.nextLine();

        while (!commands.equals("end")) {

            String[] command = commands.split(" ");

            switch (command[0]) {

                case "Add":
                    intList.add(Integer.parseInt(command[1]));
                    break;
                case "Remove":
                    intList.remove(Integer.valueOf(command[1]));
                    break;
                case "RemoveAt":
                    intList.remove(Integer.parseInt(command[1]));
                    break;
                case "Insert":
                    intList.add(Integer.parseInt(command[2]), Integer.parseInt(command[1]));
                    break;
            }

            commands = sc.nextLine();
        }
        for (int el : intList) {
            System.out.print(el + " ");
        }

        System.out.println();
        System.out.println(intList.toString().replaceAll("[\\[\\],]", ""));
    }
}
