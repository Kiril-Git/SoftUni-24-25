import java.util.Scanner;

public class O6_ActivationKeys {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String rawKeyInput = sc.nextLine();
        StringBuilder keyBuilder = new StringBuilder();
        keyBuilder.append(rawKeyInput);

        String keyInput = sc.nextLine();
        while (!keyInput.equals("Generate")) {

            String[] command = keyInput.split(">>>");

            switch (command[0]) {

                case "Contains":
                    String pattern = command[1];
                    if (keyBuilder.toString().contains(pattern)) {
                        System.out.println(keyBuilder + " contains " + pattern);
                    }
                    else {
                        System.out.println("Substring not found!");
                    }
                    break;

                case "Flip":
                    String upperOrLower = command[1];
                    int startIndex = Integer.parseInt(command[2]);
                    int endIndex = Integer.parseInt(command[3]);

                    String temp = keyBuilder.substring(startIndex, endIndex);

                    if (upperOrLower.equals("Upper")) {
                        keyBuilder.replace(startIndex, endIndex, temp.toUpperCase());
                    }
                    else if (upperOrLower.equals("Lower")) {
                        keyBuilder.replace(startIndex, endIndex, temp.toLowerCase());
                    }
                    System.out.println(keyBuilder);
                    break;

                    case "Slice":
                        startIndex = Integer.parseInt(command[1]);
                        endIndex = Integer.parseInt(command[2]);

//                        keyBuilder.replace(startIndex, endIndex, "");
                        keyBuilder.delete(startIndex, endIndex);

                        System.out.println(keyBuilder);
                        break;

            }

            keyInput = sc.nextLine();
        }

        System.out.println("Your activation key is: " + keyBuilder);
    }
}
