import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class O5_Students {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int studentsCount = Integer.parseInt(sc.nextLine());
        List<Student> students = new ArrayList<Student>();

        for (int i = 0; i < studentsCount; i++) {
            String[] inputStudents = sc.nextLine().split(" ");

            String firstName = inputStudents[0];
            String lastName = inputStudents[1];
            double grade = Double.parseDouble(inputStudents[2]);

            Student student = new Student(firstName, lastName, grade);
            students.add(student);
        }

        students.stream()
                .sorted(Comparator.comparing(Student::getGrade).reversed())
                .forEach(System.out::println);

/*        for (Student el : students) {
            System.out.println(el);
        }*/


    }
    static class Student {
        String firstName;
        String lastName;
        double grade;

        public Student(String firstName, String lastName, double grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.grade = grade;

        }

        public double getGrade() {
            return grade;
        }

        @Override
        public String toString() {
//            return this.firstName + " " + this.lastName + ": " + this.grade;
            return String.format("%s %s: %.2f", firstName, lastName, grade);
        }
    }


}
