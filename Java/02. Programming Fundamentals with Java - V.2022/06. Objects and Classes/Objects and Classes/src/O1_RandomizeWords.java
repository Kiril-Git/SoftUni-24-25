import java.util.*;
import java.util.stream.Collectors;

public class O1_RandomizeWords {
    public static class RandomizeWords {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);

            List<String> words = Arrays.stream(sc.nextLine().split(" ")).collect(Collectors.toList());


            for (int i = 0; i < words.size()-1; i++) {

                Random r = new Random();
                int index = r.nextInt(words.size());

                String word = words.get(index);

                System.out.println(word);
            }
        }
    }
}
