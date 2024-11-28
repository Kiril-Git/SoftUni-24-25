import java.util.ArrayDeque;
import java.util.Scanner;

public class O7a_SimpleEditor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = Integer.parseInt(sc.nextLine());
        StringBuilder sbText = new StringBuilder();
        ArrayDeque<String> historyStack = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            String[] command = sc.nextLine().split(" ");

            switch (command[0]) {
                case "1":
                    historyStack.push(sbText.toString());
                    sbText.append(command[1]);
                    break;

                case "2":
                    int count = Integer.parseInt(command[1]);
                    historyStack.push(sbText.toString());
                    sbText.delete(sbText.length() - count, sbText.length());
                    break;

                case "3":
                    int index = Integer.parseInt(command[1]) - 1;
                    if (index >= 0 && index < sbText.length()) {
                        System.out.println(sbText.charAt(index));
                    }
                    break;

                case "4":
                    if (!historyStack.isEmpty()) {
                        sbText = new StringBuilder(historyStack.pop());
                    }
                    break;
            }
        }
    }
}
