import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class O2_Race {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputNames = sc.nextLine().split(", ");
        String inputChars = sc.nextLine();

        Map<String, Integer> participantsMap = new LinkedHashMap<>();
        for (String el : inputNames) {
            participantsMap.putIfAbsent(el, 0);
        }

        Pattern nameRegex = Pattern.compile("[a-zA-Z]");
        Pattern distanceRegex = Pattern.compile("[0-9]");

        while (!inputChars.equals("end of race")) {

            Matcher matcherN = nameRegex.matcher(inputChars);
            Matcher matcherD = distanceRegex.matcher(inputChars);

            String name = "";
            int distance = 0;

            while (matcherN.find()) {
                 name += (matcherN.group());
            }
            while (matcherD.find()) {
                distance += (Integer.parseInt(matcherD.group()));
            }

                if (participantsMap.containsKey(name)) {
                    participantsMap.put(name, participantsMap.get(name) + distance);
                }

        inputChars = sc.nextLine();

    }
        List<Map.Entry<String, Integer>> topThree = participantsMap.entrySet()
                .stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
                .limit(3)
                .collect(Collectors.toList());

        String[] positions = {"1st", "2nd", "3rd"};

        for (int i = 0; i < topThree.size(); i++) {
            System.out.printf("%s place: %s\n", positions[i], topThree.get(i).getKey());
        }

        /*
        participantsMap.entrySet()
                .stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
                .limit(3)
                .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));

*/
    }
}
