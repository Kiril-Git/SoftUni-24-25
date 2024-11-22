import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class O5_SoftUniParking {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int commands = Integer.parseInt(sc.nextLine());
        Map<String, String> parkingMap = new LinkedHashMap<>();

        for (int i = 0; i < commands; i++) {
            String[] command = sc.nextLine().split(" ");

            switch (command[0]) {
                case "register":
                    if (parkingMap.containsKey(command[1])) {
                        System.out.println("ERROR: already registered with plate number " + command[2]);
                    }
                    else {
                        parkingMap.put(command[1], command[2]);
                        System.out.println(command[1] + " registered " + command[2] + " successfully");
                    }
                    break;

                case "unregister":
                    if (!parkingMap.containsKey(command[1])) {
                        System.out.println("ERROR: user " + command[1] + " not found");
                    }
                    else {
                        parkingMap.remove(command[1]);
                        System.out.println(command[1] + " unregistered successfully");
                    }
                    break;
            }
        }
        parkingMap.forEach((k, v) -> System.out.println(k + " => " + v));
    }
}
