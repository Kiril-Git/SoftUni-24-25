import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O2_MatchPhoneNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String phoneNumsStr = sc.nextLine();

        Pattern regex = Pattern.compile("\\+359(?<separator>[- ])2\\1\\d{3}\\1\\d{4}\\b");
        Matcher matcher = regex.matcher(phoneNumsStr);

        StringBuilder sb = new StringBuilder();

        while (matcher.find()) {
            sb.append(matcher.group()).append(", ");
        }


        if (!sb.isEmpty()) {
            sb.delete(sb.length() - 2, sb.length());
        }
        System.out.println(sb.toString());
    }
}
