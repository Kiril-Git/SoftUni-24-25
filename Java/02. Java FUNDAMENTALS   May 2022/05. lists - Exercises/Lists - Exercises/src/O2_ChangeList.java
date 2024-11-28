import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O2_ChangeList {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> intList = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        String commands = sc.nextLine();

        while (!commands.equals("end")) {

            String[] command = commands.split(" ");

            switch (command[0]) {

                case "Delete":
                    int element = Integer.parseInt(command[1]);
                    intList.removeAll(Collections.singleton(element));
                    break;

                case "Insert":
                    intList.add(Integer.parseInt(command[2]), Integer.parseInt(command[1]));
                    break;
            }

            commands = sc.nextLine();
        }

        for (Integer el : intList) {
            System.out.print(el + " ");
        }
    }
}
