import java.util.Scanner;

public class O1a_World_Tour {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputStr = sc.nextLine();
        StringBuilder sb = new StringBuilder(inputStr);

        inputStr = sc.nextLine();
        while (!inputStr.equals("Travel")){

            String[] tokens = inputStr.split(":");
            switch (tokens[0]){

                case "Add Stop":
                    int index = Integer.parseInt(tokens[1]);
                    String stopName = tokens[2];

                    if (index >= 0 && index < sb.length()){
                        sb.insert(index, stopName);
                    }
                    break;

                case "Remove Stop":
                    int startIndex = Integer.parseInt(tokens[1]);
                    int endIndex = Integer.parseInt(tokens[2]) + 1;

                    if (startIndex >= 0 && startIndex < endIndex && endIndex < sb.length()){
                        sb.delete(startIndex, endIndex);
                    }
                    break;

                case "Switch":
                    String oldStop = tokens[1];
                    String newStop = tokens[2];
                    startIndex = sb.indexOf(oldStop);

                    while (startIndex != -1) {
                        sb.replace(startIndex, startIndex + oldStop.length(), newStop);

//                  The indexOf method is called again to find the next occurrence of oldStop  ↓
                        startIndex = sb.indexOf(oldStop, startIndex + newStop.length());
                    }
                    break;
            }
            System.out.println(sb);
            inputStr = sc.nextLine();
        }

        System.out.print("Ready for world tour! Planned stops: " + sb);
    }
}
