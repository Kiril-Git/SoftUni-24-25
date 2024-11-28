import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String textNames = "Donga, Buzema, Kozhata, Kalinov";

        String regexPattern = "[A-Z][a-z]+,?";

        Pattern regex = Pattern.compile(regexPattern);
        Matcher matcher = regex.matcher(textNames);

        while (matcher.find()) {
            System.out.println(matcher.group());
        }

    }
}