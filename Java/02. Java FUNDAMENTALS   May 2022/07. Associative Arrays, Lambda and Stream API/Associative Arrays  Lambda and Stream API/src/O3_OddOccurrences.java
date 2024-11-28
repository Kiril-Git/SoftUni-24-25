import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class O3_OddOccurrences {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] arr = sc.nextLine().split(" ");

        Map<String, Integer> map = new LinkedHashMap<>();

        for (int i = 0; i < arr.length; i++) {
            String tempInput = arr[i].toLowerCase();

            if (!map.containsKey(tempInput)) {
                map.put(tempInput, 1);
            }
            else {
                map.put(tempInput, map.get(tempInput) + 1);

            }
        }
        StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, Integer> entry : map.entrySet()) {

            if (entry.getValue() % 2 != 0) {

                if (!sb.isEmpty()) {
                    sb.append(", ");
                }
                sb.append(entry.getKey());
            }
        }
        System.out.println(sb);
    }
}
