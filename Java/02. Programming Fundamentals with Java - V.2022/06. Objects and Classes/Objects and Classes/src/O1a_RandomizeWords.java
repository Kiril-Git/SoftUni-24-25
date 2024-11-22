import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O1a_RandomizeWords {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<String> words = Arrays.stream(sc.nextLine().split(" ")).collect(Collectors.toList());

        Collections.shuffle(words);

        words.forEach(System.out::println);


    }
}
