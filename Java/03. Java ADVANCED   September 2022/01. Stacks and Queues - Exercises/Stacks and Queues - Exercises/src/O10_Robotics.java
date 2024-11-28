import java.util.*;

public class O10_Robotics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] robotsInput = scanner.nextLine().split(";");
        String[] timeParts = scanner.nextLine().split(":");
        int startHour = Integer.parseInt(timeParts[0]);
        int startMinute = Integer.parseInt(timeParts[1]);
        int startSecond = Integer.parseInt(timeParts[2]);
        int currentTime = startHour * 3600 + startMinute * 60 + startSecond;

        Map<String, Integer> robots = new LinkedHashMap<>();
        Map<String, Integer> busyUntil = new LinkedHashMap<>();
        for (String robot : robotsInput) {
            String[] robotData = robot.split("-");
            String robotName = robotData[0];
            int processTime = Integer.parseInt(robotData[1]);
            robots.put(robotName, processTime);
            busyUntil.put(robotName, 0); // Initialize all robots as free
        }

        // Queue for products
        ArrayDeque<String> productsQueue = new ArrayDeque<>();
        String product = scanner.nextLine();

        while (!product.equals("End")) {
            productsQueue.offer(product);
            product = scanner.nextLine();
        }

        while (!productsQueue.isEmpty()) {
            currentTime++;
            product = productsQueue.poll();
            boolean assigned = false;

            for (Map.Entry<String, Integer> robot : busyUntil.entrySet()) {
                String robotName = robot.getKey();
                int freeTime = robot.getValue();

                if (freeTime <= currentTime) {
                    int processTime = robots.get(robotName);
                    busyUntil.put(robotName, currentTime + processTime);

                    int hours = (currentTime / 3600) % 24;
                    int minutes = (currentTime % 3600) / 60;
                    int seconds = currentTime % 60;

                    System.out.printf("%s - %s [%02d:%02d:%02d]%n", robotName, product, hours, minutes, seconds);
                    assigned = true;
                    break;
                }
            }

            if (!assigned) {
                productsQueue.offer(product);
            }
        }
    }
}
