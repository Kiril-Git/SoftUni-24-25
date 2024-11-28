import java.util.Arrays;
import java.util.Scanner;

public class O2_MuOnline {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] dungeonRooms = sc.nextLine().split("\\|");

        int health = 100;
        int bitcoins = 0;

         for (int i = 0; i < dungeonRooms.length; i++) {

            String dungeonRoom = dungeonRooms[i];
            String[] command = dungeonRoom.split(" ");

            String commandType = command[0];
            int value = Integer.parseInt(command[1]);

            switch (commandType) {

                case "potion":

                    if (health + value > 100) {         //    int healedAmount = Math.min(100 - health, value);
                        value = 100 - health;
                        health = 100;
                    }
                    else {
                        health += value;

                    }
                    System.out.printf("You healed for %d hp.\n", value);
                    System.out.printf("Current health: %d hp.\n", health);
                    break;

                case "chest":
                    bitcoins += value;
                    System.out.printf("You found %d bitcoins.\n", value);
                    break;

                default:
                    health -= value;

                    if (health <= 0) {
                        int room = i + 1;
                        System.out.printf("You died! Killed by %s.\n", commandType);
                        System.out.println("Best room: " + room);
                        return;
                    }
                    else {
                        System.out.printf("You slayed %s.\n",  commandType);
                    }
            }

        }
        System.out.println("You've made it!");
        System.out.println("Bitcoins: " + bitcoins);
        System.out.println("Health: " + health);
    }
}
