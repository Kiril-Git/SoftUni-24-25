import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O1a_Train {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Reading the initial passengers in each wagon
        List<Integer> wagons = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        // Reading the max capacity of a wagon
        int maxCapacity = Integer.parseInt(sc.nextLine());

        // Processing the commands until "end" is received
        String command = sc.nextLine();

        while (!command.equals("end")) {

            String[] parts = command.split(" ");

            if (parts[0].equals("Add")) {
                // Adding a new wagon with the specified number of passengers
                wagons.add(Integer.parseInt(parts[1]));
            } else {
                // Adding passengers to the first available wagon
                int passengers = Integer.parseInt(parts[0]);
                for (int i = 0; i < wagons.size(); i++) {
                    if (wagons.get(i) + passengers <= maxCapacity) {
                        wagons.set(i, wagons.get(i) + passengers);
                        break;
                    }
                }
            }

            command = sc.nextLine();  // Read the next command
        }

        // Printing the final state of the train
        for (int wagon : wagons) {
            System.out.print(wagon + " ");
        }
    }
}
