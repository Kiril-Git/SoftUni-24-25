import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O1_Train {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> inputPassengers = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        int CARRIAGE_CAPACITY = sc.nextInt();

        sc.nextLine();
        String commands = sc.nextLine();

        while (!commands.equals("end")) {

            String[] command = commands.split(" ");

            if (command[0].equals("Add")) {
                inputPassengers.add(Integer.parseInt(command[1]));
            }
            else {
                int passengers = Integer.parseInt(command[0]);

                int avCarriage = findCapacityInACarriage(inputPassengers, passengers, CARRIAGE_CAPACITY);

                if (avCarriage != -1) {
                    inputPassengers.set(avCarriage, inputPassengers.get(avCarriage) + passengers);
                }
            }
            commands = sc.nextLine();
        }
        for (int el : inputPassengers) {

            System.out.print(el + " ");
        }
    }



    private static int findCapacityInACarriage(List<Integer> inputPassengers, int passengers, int CARRIAGE_CAPACITY) {

        for (int i = 0; i < inputPassengers.size(); i++) {

            int occupiedSeats  = inputPassengers.get(i);

            if (occupiedSeats + passengers <= CARRIAGE_CAPACITY) {

                return i;
            }
        }
        return -1;
    }


}
