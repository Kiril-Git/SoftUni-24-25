import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class O3_HouseParty {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int guestsNum = Integer.parseInt(sc.nextLine());
        List<String> guestsList = new ArrayList<>();

        for (int i = 0; i < guestsNum; i++) {

            String[] command = sc.nextLine().split(" ");
            String guestName = command[0];

            switch (command[2]) {

                case "going!":

                    if (!guestsList.contains(guestName)) {
                        guestsList.add(guestName);
                    } else {
                        System.out.println(guestName + " is already in the list!");
                    }
                    break;

                case "not":

                    if (guestsList.contains(guestName)) {
                        guestsList.remove(guestName);
                    }
                    else {
                        System.out.println(guestName + " is not in the list!");
                    }
                    break;
            }
        }

/*        for (String guestName : guestsList) {
            System.out.println(guestName);
        }*/

        guestsList.forEach(System.out::println);
    }
}
