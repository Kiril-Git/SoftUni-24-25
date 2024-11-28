import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

/*
        Student
        name    ->     String
        avScore ->     double
        */

        Student st1 = new Student("Big Donga", 23);
        Student st2 = new Student("Big Buzema", 24);
        Student st3 = new Student("Shepard boy", 13);
        Student st4 = new Student("Danny boy", 16);

        List<Student> studentsList = new ArrayList<>();

        studentsList.add(st1);
        studentsList.add(st2);
        studentsList.add(st3);

        studentsList.stream()
                        .sorted((s1, s2) -> Double.compare(s2.avScore, s1.avScore))
                                .forEach(s -> System.out.println(s.getData()));


    }


    static class Student {

        String name;
        double avScore;

        public Student(String name, double avScore) {
            this.name = name;
            this.avScore = avScore;
        }






        String getData() {
            return String.format("I am %s with BEST score of: %.2f", this.name, this.avScore);
        }
    }
}