import java.util.Scanner;

public class O1_SecretChat {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputMessage = sc.nextLine();
        StringBuilder sb = new StringBuilder(inputMessage);

        inputMessage = sc.nextLine();
        while (!inputMessage.equals("Reveal")) {

            String[] tokens = inputMessage.split(":\\|:");
            String command = tokens[0];

            switch (command) {

                case "ChangeAll":
                    String currentSubstring = tokens[1];
                    String newSubstring = tokens[2];

                    replaceSubstring(sb, currentSubstring, newSubstring);
                    break;

                case "Reverse":
                    currentSubstring = tokens[1];

                    if (sb.indexOf(currentSubstring) != -1) {
                        reverseSubstring(sb, currentSubstring);
                    }
                    else {
                        System.out.println("error");
                        inputMessage = sc.nextLine();
                        continue;
                    }
                    break;

                case "InsertSpace":
                    int splitAtInd = Integer.parseInt(tokens[1]);

                    sb.insert(splitAtInd, " ");
                    break;
            }
            System.out.println(sb);

            inputMessage = sc.nextLine();
        }
        System.out.println("You have a new text message: " + sb);

    }

    private static void reverseSubstring(StringBuilder sb, String currentSubstring) {

        int index = sb.indexOf(currentSubstring);
        sb.delete(index, index + currentSubstring.length());
        int counter = 0;
        for (int i = currentSubstring.length() - 1; i >= 0 ; i--) {

            char temp = currentSubstring.charAt(i);
            sb.insert(index + counter, temp);
            counter++;
        }
/*
String reversed = new StringBuilder(currentSubstring).reverse().toString();
        sb.append(reversed);
        */
    }


    private static void replaceSubstring(StringBuilder sb, String currentSubstring, String newSubstring) {

        int index = sb.indexOf(currentSubstring);

        while (index != -1) {
            sb.replace(index, index + currentSubstring.length(), newSubstring);

            index = sb.indexOf(currentSubstring, index + newSubstring.length());
        }
    }

}
