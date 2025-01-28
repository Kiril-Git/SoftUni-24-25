import java.util.*;

public class O3_OpinionPoll {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int participantsCount = Integer.parseInt(sc.nextLine());

        List<Person> participants = new ArrayList<>();

        for (int i = 0; i < participantsCount; i++) {
            String[] participantDetails = sc.nextLine().split(" ");

            String participantName = participantDetails[0];
            int participantAge = Integer.parseInt(participantDetails[1]);

            Person participant = new Person(participantName, participantAge);

            if (participantAge > 30) {
            //    participants.add(new Person(participantName, participantAge));
                participants.add(participant);


            }
        }

   //     participants.sort(Comparator.comparing(person -> person.name));
                participants.forEach(System.out::println);


    }

    static class Person{
        String name;
        int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        @Override
        public String toString() {
            return this.name + " - " + this.age;
        }
    }


}
