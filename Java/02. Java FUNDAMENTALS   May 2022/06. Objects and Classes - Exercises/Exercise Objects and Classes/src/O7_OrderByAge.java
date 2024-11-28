import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class O7_OrderByAge {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputPersonDetails = sc.nextLine();
        List<Person> personList = new ArrayList<>();

        while (!inputPersonDetails.equals("End")) {
            String[] personDetails = inputPersonDetails.split("\\s+");

            String personName = personDetails[0];
            int personId = Integer.parseInt(personDetails[1]);
            int age = Integer.parseInt(personDetails[2]);

            Person person = new Person(personName, personId, age);
            personList.add(person);


            inputPersonDetails = sc.nextLine();
        }

        personList.stream()
                        .sorted(Comparator.comparing(Person::getAge))
                        .forEach(System.out::println);
    }



    static class Person {
        String name;
        int id;
        int age;

        public Person(String name, int id, int age) {
            this.name = name;
            this.id = id;
            this.age = age;
        }


        public int getAge() {
            return age;
        }



        @Override
        public String toString() {
            return String.format("%s with ID: %d is %d years old.", name, id, age);
        }
    }



}
