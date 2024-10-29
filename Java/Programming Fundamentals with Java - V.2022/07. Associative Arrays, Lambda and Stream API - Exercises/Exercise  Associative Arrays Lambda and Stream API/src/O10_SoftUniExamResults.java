import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class O10_SoftUniExamResults {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputParticipants = sc.nextLine();
        Map<String, Student> participantsMap = new LinkedHashMap<>();

        while (!inputParticipants.equals("exam finished")) {
            String[] tokens = inputParticipants.split("-");

            String participant = tokens[0];
            String language = tokens[1];

            int points = Integer.parseInt(tokens[2]);

            Student student = new Student(participant, language, points);

            if (!participantsMap.containsKey(participant)) {
                participantsMap.put(participant, student);
            }
            else {

            }



            inputParticipants = sc.nextLine();
        }

    }

    static class Student {
        String name;
        String language;
        int points;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getLanguage() {
            return language;
        }

        public void setLanguage(String language) {
            this.language = language;
        }

        public int getPoints() {
            return points;
        }

        public void setPoints(int points) {
            this.points = points;
        }

        public Student(String name, String language, int points) {
            this.name = name;
            this.language = language;
            this.points = points;


        }

    }
}
