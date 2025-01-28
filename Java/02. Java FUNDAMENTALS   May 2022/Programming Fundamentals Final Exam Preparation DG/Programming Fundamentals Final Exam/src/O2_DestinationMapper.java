import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O2_DestinationMapper {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Pattern destinationRegex = Pattern.compile("([=/])([A-Z][a-zA-Z]{2,})\\1");
        Matcher matcher = destinationRegex.matcher(scanner.nextLine());

        List<String> destinations = new ArrayList<>();
        int travelPointsCounter = 0;

        while (matcher.find()) {

            String destination = matcher.group(2);
            destinations.add(destination);
            travelPointsCounter += destination.length();
        }

        System.out.printf("Destinations: %s\n", String.join(", ", destinations));
        System.out.println("Travel Points: " + travelPointsCounter);
    }
}

//          int travelPoints = destinations.stream().mapToInt(String::length).sum();