import java.util.*;

public class O7_StudentAcademy {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputIters = Integer.parseInt(sc.nextLine());

        Map<String, List<Double>> studentsMap = new LinkedHashMap<>();

        for (int i = 0; i < inputIters; i++) {

            String inputStudentName = sc.nextLine();
            Double inputGrade = Double.parseDouble(sc.nextLine());

            studentsMap.putIfAbsent(inputStudentName, new ArrayList<>());
            studentsMap.get(inputStudentName).add(inputGrade);

        }
/*        studentsMap.entrySet().stream()
                .filter(entry -> entry.getValue()
                        .stream()
                        .mapToDouble(Double::doubleValue)
                        .average()
                        .orElse(0.0) >= 4.5)
                        */

                studentsMap.forEach((key, value) -> {
                    double avGrade = value
                            .stream().mapToDouble(x -> x)
                            .average().orElse(0.0);

                    if (avGrade >= 4.5) {
                        System.out.printf("%s -> %.2f\n", key, avGrade);
                    }
                });

    }
}
