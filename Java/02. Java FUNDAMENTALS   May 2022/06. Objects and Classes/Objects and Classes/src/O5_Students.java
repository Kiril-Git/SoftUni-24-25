import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O5_Students {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Student> students = new ArrayList<>();

        String inputStudentsData = sc.nextLine();

        while (!inputStudentsData.equals("end")){

            String[] studentData = inputStudentsData.split(" ");

            String firstName = studentData[0];
            String lastName = studentData[1];
            int age = Integer.parseInt(studentData[2]);
            String city = studentData[3];

            Student student = new Student(firstName, lastName, age, city);
            students.add(student);

            inputStudentsData = sc.nextLine();
        }

        String filterCity = sc.nextLine();

            for (Student el : students){

                if (el.getCity().equals(filterCity)) {

                    System.out.printf("%s %s is %d years old\n", el.getFirstName(),  el.getLastName(), el.getAge());

            }
        }




    }

    static class  Student {

        private String firstName;
        private String lastName;
        private int age;
        private String city;

        public Student(String firstName, String lastName, int age, String city) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.city = city;
        }

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }
    }
}
