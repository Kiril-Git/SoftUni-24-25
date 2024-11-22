import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class O10a_SoftUniExamResults {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputParticipants = sc.nextLine();
        Map<String, Integer> participantPointsMap = new LinkedHashMap<>();
        Map<String, Integer> languageMap = new LinkedHashMap<>();


        while (!inputParticipants.equals("exam finished")) {
            String[] tokens = inputParticipants.split("-");

            String participantName = tokens[0];
            String language = tokens[1];

            if (language.equals("banned")){
                participantPointsMap.remove(participantName);
                inputParticipants = sc.nextLine();

                continue;
            }
            int points = Integer.parseInt(tokens[2]);

            participantPointsMap.putIfAbsent(participantName, 0);
            int oldPoints = participantPointsMap.get(participantName);
            if (points > oldPoints){
                participantPointsMap.put(participantName, points);
            }

            languageMap.putIfAbsent(language, 0);
            languageMap.put(language, languageMap.get(language) + 1);


            inputParticipants = sc.nextLine();
        }

        System.out.println("Results:");
        participantPointsMap.forEach((k, v) -> System.out.println(k + " | " + v));
        System.out.println("Submissions:");
        languageMap.forEach((k, v) -> System.out.println(k + " - " + v));

    }

}
