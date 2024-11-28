import java.util.ArrayDeque;
import java.util.Scanner;

public class O5_PrinterQueues {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputFile = sc.nextLine();
        ArrayDeque<String> filesQueue = new ArrayDeque<>();

        while (!inputFile.equals("print")) {

            if (inputFile.equals("cancel")) {
                if (!filesQueue.isEmpty()) {
                    System.out.println("Canceled " + filesQueue.poll());
                }
                else {
                    System.out.println("Printer is on standby");
                }
            }
            else {
                filesQueue.offer(inputFile);
            }

            inputFile = sc.nextLine();
        }


        for (String el : filesQueue) {
            System.out.println(el);
        }
    }
}
