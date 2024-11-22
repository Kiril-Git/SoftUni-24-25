import java.util.*;
import java.util.stream.Collectors;

public class O7_MathPotato {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        PriorityQueue<String> participantsQueue = Arrays.stream(sc.nextLine().split("\\s+"))
                .collect(Collectors.toCollection(PriorityQueue::new));
        int n = Integer.parseInt(sc.nextLine());

        int cyclesCount = 0;
        while (participantsQueue.size() > 1) {
            cyclesCount++;

            for (int i = 1; i < n; i++) {
                String participantName = participantsQueue.poll();
                participantsQueue.offer(participantName);
            }
            if (!isPrime(cyclesCount)) {
                System.out.printf("Removed %s\n", participantsQueue.poll());
            }
            else {
                System.out.printf("Prime %s\n", participantsQueue.peek());
            }

        }
        System.out.println("Last is " + participantsQueue.poll());
    }




    private static boolean isPrime(int cyclesCount) {
        if (cyclesCount < 2) {
            return false;
        }
        for (int i = 2; i * i <= cyclesCount; i++) {
            if (cyclesCount % i == 0) {
                return false;
            }
        }
        return true;
    }
}
