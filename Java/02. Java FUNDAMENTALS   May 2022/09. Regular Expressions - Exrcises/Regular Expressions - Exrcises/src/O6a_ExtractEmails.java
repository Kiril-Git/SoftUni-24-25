import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O6a_ExtractEmails {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String email = sc.nextLine();
        Pattern inputRegex = Pattern.compile("\\b[a-z0-9A-Z]+(?:[_.-][a-z0-9A-Z]+)*@[a-z]+(?:-[a-z]+)*(?:\\.[a-z]+(?:-[a-z]+)*)+\\b");

        Matcher matcher = inputRegex.matcher(email);

        while (matcher.find()) {
            System.out.println(matcher.group());

        }
    }
}
