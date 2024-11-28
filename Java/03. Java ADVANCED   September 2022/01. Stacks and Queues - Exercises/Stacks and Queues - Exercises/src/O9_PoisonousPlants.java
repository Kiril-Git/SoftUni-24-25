import java.util.*;

public class O9_PoisonousPlants {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int iterations = Integer.parseInt(scanner.nextLine());
        String[] plantsInput = scanner.nextLine().split(" ");

        ArrayList<String> plantsList = new ArrayList<>(Arrays.asList(plantsInput));

        ArrayDeque<Integer> positions = new ArrayDeque<>();

        int days = 0;
        boolean casualties = false;

        while (!casualties) {

            for (int i = 0; i < plantsList.size()-1; i++) {

                int left = Integer.parseInt(plantsList.get(i));
                int right = Integer.parseInt(plantsList.get(i+1));

                if (right > left) {
                    positions.offer(i+1);
                }
            }

            if (!positions.isEmpty()) {
                days++;

                int iters = positions.size();
                for (int i = 0; i < iters; i++) {

                    int element = positions.pollLast();
                    plantsList.remove(element);

                }
            }
            else {
                casualties = true;
            }

        }

        System.out.print(days);
    }
}
