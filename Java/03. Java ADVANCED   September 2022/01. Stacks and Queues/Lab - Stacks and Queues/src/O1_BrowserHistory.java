import java.util.ArrayDeque;
import java.util.Scanner;

public class O1_BrowserHistory {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String urlInput = sc.nextLine();
        ArrayDeque<String> history = new ArrayDeque<>();
        String currentUrl = null;

        while (!urlInput.equals("Home")) {

            if (urlInput.equals("back")) {
                if (!history.isEmpty()) {
                    currentUrl = history.pop();
                    System.out.println(currentUrl);
                }
                else {
                    System.out.println("no previous URLs");
                }
            }
            else {
                if (currentUrl != null){
                    history.push(currentUrl);
                }
                currentUrl = urlInput;
                System.out.println(currentUrl);
            }

            urlInput = sc.nextLine();
        }
    }
}
