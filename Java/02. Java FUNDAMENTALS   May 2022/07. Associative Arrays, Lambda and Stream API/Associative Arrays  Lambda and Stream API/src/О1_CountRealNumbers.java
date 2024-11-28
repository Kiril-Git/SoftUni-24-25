import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class О1_CountRealNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputInt = sc.nextLine().split(" ");
        Map<Integer, Integer> map = new TreeMap<>();

        for (int i = 0; i < inputInt.length; i++) {

            int tempInt = Integer.parseInt(inputInt[i]);

            if (!map.containsKey(tempInt)) {
                map.put(tempInt, 1);
            }
            else {
                map.put(tempInt, map.get(tempInt) + 1);
            }
        }
        for (Map.Entry<Integer, Integer> el : map.entrySet()) {
            System.out.println(el.getKey() + " -> " + el.getValue());
        }


    }
}
