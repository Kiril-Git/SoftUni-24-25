import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Map<String, Integer> phoneBook = new TreeMap<>();

        phoneBook.put("Mike", 123456);
        phoneBook.put("John", 987654321);
        phoneBook.put("Bob", 987654321);
        phoneBook.put("Jane", 987654321);

        phoneBook.forEach((k, v) -> System.out.println(k + ": " + v));


    }
}