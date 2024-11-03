import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O3_MatchDates {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputDates = sc.nextLine();

        Pattern dateRegex = Pattern.compile("\\b(?<Day>\\d{2})([?<separator>\\/.-])(?<Month>[A-Z][a-z]{2})\\2(?<Year>\\d{4})\\b");
        Matcher matcher = dateRegex.matcher(inputDates);

        while (matcher.find()) {

            System.out.printf("Day: %s, Month: %s, Year: %s\n", matcher.group("Day"), matcher.group("Month"), matcher.group("Year"));
        }
    }
}
