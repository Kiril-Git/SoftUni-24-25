import java.util.ArrayDeque;
import java.util.Scanner;

public class O7_SimpleEditor {
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
                    int iterations = Integer.parseInt(command[1]);
                    historyStack.push(sbText.toString());

                    if (iterations > sbText.length()) {
                        iterations = sbText.length();
                    }
                    for (int j = 1; j <= iterations; j++) {
                        sbText.deleteCharAt(sbText.length() - 1);
                    }
                    break;

                case "3":
                    int index = Integer.parseInt(command[1]) -1;

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
