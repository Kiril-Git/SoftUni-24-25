import java.util.Scanner;

public class O1_World_Tour {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder(sc.nextLine());

        String command;
        while (!(command = sc.nextLine()).equals("Travel")) {
            String[] tokens = command.split(":");

            switch (tokens[0]) {
                case "Add Stop":
                    int index = Integer.parseInt(tokens[1]);
                    String stopName = tokens[2];
                    if (index >= 0 && index <= sb.length()) {
                        sb.insert(index, stopName);
                    }
                    break;

                case "Remove Stop":
                    int startIndex = Integer.parseInt(tokens[1]);
                    int endIndex = Integer.parseInt(tokens[2]) + 1;
                    if (startIndex >= 0 && startIndex < sb.length() && endIndex > startIndex && endIndex <= sb.length()) {
                        sb.delete(startIndex, endIndex);
                    }
                    break;

                case "Switch":
                    String oldStop = tokens[1];
                    String newStop = tokens[2];
                    int startIndexSwitch = sb.indexOf(oldStop);
                    while (startIndexSwitch != -1) {
                        sb.replace(startIndexSwitch, startIndexSwitch + oldStop.length(), newStop);
                        startIndexSwitch = sb.indexOf(oldStop, startIndexSwitch + newStop.length());
                    }
                    break;
            }

            System.out.println(sb);
        }

        System.out.printf("Ready for world tour! Planned stops: %s%n", sb);
    }
}
