import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O9_Pokemon {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> intList = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        int sum = 0;

        while (!intList.isEmpty()) {

            int inputIndex = Integer.parseInt(sc.nextLine());
            int pokemon = 0;

            if (inputIndex >= 0 && inputIndex < intList.size()) {
                pokemon = intList.remove(inputIndex);
                sum += pokemon;
                modifyAllElementsInTheList(intList, pokemon);
            }
            else if (inputIndex < 0) {
                inputIndex = 0;
                pokemon = intList.remove(inputIndex);
                sum += pokemon;
                intList.add(inputIndex, intList.getLast());
                modifyAllElementsInTheList(intList, pokemon);
            }
            else {
                inputIndex = intList.size() - 1;
                pokemon = intList.remove(inputIndex);
                sum += pokemon;
                intList.add(inputIndex, intList.getFirst());
                modifyAllElementsInTheList(intList, pokemon);
            }

        }
        System.out.println(sum);
    }



    private static void modifyAllElementsInTheList(List<Integer> intList, int pokemon) {

        for (int i = 0; i < intList.size(); i++) {

            int tempPokemon = intList.get(i);

            if (tempPokemon > pokemon) {
                intList.set(i, tempPokemon - pokemon);
            }
            else {
                intList.set(i, tempPokemon + pokemon);
            }
        }
    }


}
