import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O6_CardsGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> playerOneCards = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        List<Integer> playerTwoCards = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());


        int winnerPoints = 0;

        while (!playerOneCards.isEmpty() && !playerTwoCards.isEmpty()) {

            int plOneCard = playerOneCards.removeFirst();
            int plTwoCard = playerTwoCards.removeFirst();

            if (plOneCard > plTwoCard) {
                playerOneCards.add(plOneCard);
                playerOneCards.add(plTwoCard);
            }
            else if (plTwoCard > plOneCard) {

                playerTwoCards.add(plTwoCard);
                playerTwoCards.add(plOneCard);
            }
        }


        printWinner(playerOneCards, playerTwoCards, winnerPoints);

    }



    static void printWinner(List<Integer> playerOneCards, List<Integer> playerTwoCards, int winnerPoints) {

        if (playerTwoCards.isEmpty()){
            for (int el : playerOneCards) {
                winnerPoints += el;
            }
            System.out.println("First player wins! Sum: " + winnerPoints);
        }
        else {
            for (int el : playerTwoCards) {
                winnerPoints += el;
            }
            System.out.println("Second player wins! Sum: " + winnerPoints);
        }
    }



}
