import java.util.*;

public class O2_WordSynonyms {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int entries = Integer.parseInt(sc.nextLine());

        Map<String, List<String>> synonymsMap = new LinkedHashMap<>();

        for (int i = 0; i < entries; i++) {
            String word = sc.nextLine();
            String synonym = sc.nextLine();

            if (!synonymsMap.containsKey(word)) {
                synonymsMap.put(word, new ArrayList<>());
            }

                synonymsMap.get(word).add(synonym);


        }
        for (Map.Entry<String, List<String>> entry : synonymsMap.entrySet()) {

                System.out.println(entry.getKey() + " - " + String.join(", ", entry.getValue()));

                // Alt + Enter

        }
    }
}
