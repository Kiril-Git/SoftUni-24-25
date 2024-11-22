import java.util.*;

public class O6_Courses {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputCourse = sc.nextLine();
        Map<String, List<String>> coursesMap = new LinkedHashMap<>();

        while (!inputCourse.equals("end")) {
            String[] courseDetails = inputCourse.split(" : ");
            String courseName = courseDetails[0];
            String studentName = courseDetails[1];


            coursesMap.putIfAbsent(courseName, new ArrayList<>());
            coursesMap.get(courseName).add(studentName);


            inputCourse = sc.nextLine();
        }

        coursesMap.forEach((key, value) -> {
            System.out.printf("%s: %s\n", key, value.size());
            value.forEach(el -> System.out.printf("-- %s\n", el));
        });
    }
}
