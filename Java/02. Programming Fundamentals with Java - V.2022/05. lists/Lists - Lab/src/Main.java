import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        List<String> wordsList = new ArrayList<>();

        wordsList.add("Donga");
        wordsList.add("Buzema");
        wordsList.add("kozhata");
        wordsList.add("shepard");

        wordsList.set(3, "Kalinov");

        wordsList.remove(3);


        for (int i = 0; i < wordsList.size(); i++) {
            System.out.print(wordsList.get(i) + " ");
        }


    }
}