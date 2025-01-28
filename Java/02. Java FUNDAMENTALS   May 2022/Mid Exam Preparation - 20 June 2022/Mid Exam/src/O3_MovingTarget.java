import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O3_MovingTarget {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> targetInt = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        String commands = sc.nextLine();

        while (!commands.equals("End")) {

            String[] command = commands.split(" ");
            int index = Integer.parseInt(command[1]);
            int value = Integer.parseInt(command[2]);

            switch (command[0]) {

                case "Shoot":

                    if (index >= 0 && index < targetInt.size()) {

                        int target = targetInt.remove(index);
                        target -= value;

                        if (target > 0) {
                            targetInt.add(index, target);
                        }
                    }
                    break;

                case "Add":

                    if (index >= 0 && index < targetInt.size()) {

                        targetInt.add(index, value);
                    }
                    else {
                        System.out.println("Invalid placement!");
                    }
                    break;

                case "Strike":

                    if (index - value >= 0 && index + value < targetInt.size()) {

                        strikeTargetsInRange(targetInt, index, value);
                    }
                    else {
                        System.out.println("Strike missed!");
                    }
                    break;

            }
            commands = sc.nextLine();
        }

        if (!targetInt.isEmpty()) {
            System.out.println(targetInt.stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining("|")));
        }
    }


    private static void strikeTargetsInRange(List<Integer> targetInt, int index, int value) {

        int start = index - value;
        int end = index + value;

        for (int i = start; i <= end; i++) {
            targetInt.remove(start);
        }
    }


}
