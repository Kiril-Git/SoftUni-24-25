import java.util.ArrayDeque;
import java.util.Scanner;

public class O8_BrowserHistory {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String urlInput = sc.nextLine();
        ArrayDeque<String> history = new ArrayDeque<>();
        ArrayDeque<String> forward = new ArrayDeque<>();

        String currentUrl = "no previous URLs";

        while (!urlInput.equals("Home")) {

            if (urlInput.equals("back")) {
                currentUrl = "no previous URLs";
                if (history.size() > 1) {
                    forward.addFirst(history.peek());
                    history.pop();
                    currentUrl = history.peek();
                }
                System.out.println(currentUrl);
            }
                else if (urlInput.equals("forward")) {
                    currentUrl = "no next URLs";

                    if (!forward.isEmpty()) {
                        currentUrl = forward.peek();
                        history.push(forward.pop());
                    }
                    System.out.println(currentUrl);
            }
            else {
                currentUrl = urlInput;
                history.push(currentUrl);
                forward.clear();
                System.out.println(currentUrl);
            }

            urlInput = sc.nextLine();
        }
    }
}
