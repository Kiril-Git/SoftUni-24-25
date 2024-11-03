import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O1_MatchFullName {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String textNames = sc.nextLine();

        Pattern regex = Pattern.compile("\\b[A-Z][a-z]+ [A-Z][a-z]+\\b");
        Matcher matcher = regex.matcher(textNames);

        while (matcher.find()) {
            System.out.print(matcher.group() + " ");

        }
    }
}
