import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O6b_CardsGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Use LinkedList to support removeFirst()
        List<Integer> playerOneCards = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toCollection(LinkedList::new));

        List<Integer> playerTwoCards = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toCollection(LinkedList::new));

        int plOnePoints = 0;
        int plTwoPoints = 0;

        while (!playerOneCards.isEmpty() && !playerTwoCards.isEmpty()) {

            int plOneCard = playerOneCards.removeFirst();  // Using remove(0), valid for LinkedList
            int plTwoCard = playerTwoCards.removeFirst();  // Using remove(0), valid for LinkedList

            if (plOneCard > plTwoCard) {
                playerOneCards.add(plOneCard);
                playerOneCards.add(plTwoCard);
                plOnePoints += plOneCard + plTwoCard;

            } else if (plTwoCard > plOneCard) {
                playerTwoCards.add(plTwoCard);
                playerTwoCards.add(plOneCard);
                plTwoPoints += plOneCard + plTwoCard;
            }
        }

        // Calculate sum for the remaining cards
        int sum = 0;
        O6_CardsGame.printWinner(playerOneCards, playerTwoCards, sum);
    }
}
