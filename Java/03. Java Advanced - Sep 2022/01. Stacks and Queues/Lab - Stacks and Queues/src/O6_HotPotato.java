import java.util.ArrayDeque;
import java.util.Collections;
import java.util.Scanner;

public class O6_HotPotato {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputParticipants = sc.nextLine().split(" ");
        int n = Integer.parseInt(sc.nextLine());
        ArrayDeque<String> participantsQueue = new ArrayDeque<>();

        Collections.addAll(participantsQueue, inputParticipants);

        while (participantsQueue.size() > 1) {

            for (int i = 0; i < n; i++) {
                String participantName = participantsQueue.pop();

                if (i != n - 1) {
                    participantsQueue.offer(participantName);
                }
                else {
                    System.out.println("Removed " + participantName);
                }
            }
        }
        System.out.println("Last is " + participantsQueue.poll());
    }
}
