import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String line = sc.nextLine();
        Map<String, Integer> map = new HashMap<>();

        while (!line.equals("End")) {
            String[] tokens = line.split("\\s+");

            String key = tokens[0];
            int value = Integer.parseInt(tokens[1]);

            map.put(key, value);

            line = sc.nextLine();
        }
        for (Map.Entry<String, Integer> el : map.entrySet()) {
            System.out.println(el.getKey() + " " + el.getValue());
        }
        System.out.println();
        if (map.containsKey("Donga")){
            System.out.println("Yes");
        }
/*      Входни данни:
        Donga 23
        Buzema 23
        Kozhata 15
        End
                */

        int minNum = Arrays.stream(new int[]{15, 23, 24}).min().orElse(100);
        System.out.println(minNum);

    }
}