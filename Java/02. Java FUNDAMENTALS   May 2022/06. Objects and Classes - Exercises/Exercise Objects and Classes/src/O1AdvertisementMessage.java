import java.util.Random;
import java.util.Scanner;

public class O1AdvertisementMessage {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Message msg = new Message();

        msg.printMessage(n);


    }


    static class Message {

        String[] phrases = {"Excellent product.", "Such a great product.", "I always use that product.", "Best product of its category.", "Exceptional product.", "I can’t live without this product."};
        String[] events = {"Now I feel good.", "I have succeeded with this product.", "Makes miracles. I am happy of the results!", "I cannot believe but now I feel awesome.", "Try it yourself, I am very satisfied.", "I feel great!"};
        String[] authors = {"Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva"};
        String[] cities = {"Burgas", "Sofia", "Plovdiv", "Varna", "Ruse"};

        Random rand = new Random();

        void printMessage(int numMess) {

            for (int i = 0; i < numMess; i++) {

                System.out.printf("%s %s %s - %s\n",
                        this.phrases[rand.nextInt(this.phrases.length)],
                        this.events[rand.nextInt(this.events.length)],
                        this.authors[rand.nextInt(this.authors.length)],
                        this.cities[rand.nextInt(this.cities.length)]);
            }
        }

    }
}
