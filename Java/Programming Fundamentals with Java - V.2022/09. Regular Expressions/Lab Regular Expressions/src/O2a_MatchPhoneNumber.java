import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O2a_MatchPhoneNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String phoneNumsStr = sc.nextLine();

        Pattern regex = Pattern.compile("\\+359(?<separator>[- ])2\\1\\d{3}\\1\\d{4}\\b");
        Matcher matcher = regex.matcher(phoneNumsStr);

        List<String> phoneNumbers = new ArrayList<>();

        while (matcher.find()) {
            phoneNumbers.add(matcher.group());
        }


        System.out.println(phoneNumbers.toString().replace("[", "").replace("]", ""));
    }
}
