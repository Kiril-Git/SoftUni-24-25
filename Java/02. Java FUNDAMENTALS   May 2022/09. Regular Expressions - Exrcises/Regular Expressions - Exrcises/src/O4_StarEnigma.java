import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O4_StarEnigma {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int iterInput = Integer.parseInt(sc.nextLine());
        Pattern codeRegex = Pattern.compile("[STARstar]");
        Pattern partsRegex = Pattern.compile("^[^@!:>-]*?@([A-Za-z]+)[^@!:>-]*?:([0-9]+)[^@!:>-]*?!([AD])![^@!:>-]*?->([0-9]+)[^@!:>-]*?$");

        List<String> attackedPlanets = new ArrayList<>();
        List<String> destroyedPlanets = new ArrayList<>();

        for (int i = 0; i < iterInput; i++) {
            String inputCode = sc.nextLine();
            Matcher matcher = codeRegex.matcher(inputCode);

            String decoded = "";
            int counter = 0;

            while (matcher.find()) {
                counter++;

            }
            for (int j = 0; j < inputCode.length(); j++) {

                int tempChar = inputCode.charAt(j) - counter;
                char c = (char) tempChar;
                decoded += c;
            }

            Matcher partsMatcher = partsRegex.matcher(decoded);

            if (partsMatcher.find()) {
                String attackedOrDestroyed = partsMatcher.group(3);
                String name = partsMatcher.group(1);

                if (attackedOrDestroyed.equals("D")) {
                    destroyedPlanets.add(name);
                }
                else if (attackedOrDestroyed.equals("A")) {
                    attackedPlanets.add(name);
                }
            }
        }
        Collections.sort(attackedPlanets);
        Collections.sort(destroyedPlanets);

        System.out.println("Attacked planets: " + attackedPlanets.size());
        for (String el : attackedPlanets) {
            System.out.println("-> " + el);
        }
        System.out.println("Destroyed planets: " + destroyedPlanets.size());
        for (String el : destroyedPlanets) {
            System.out.println("-> " +el);
        }
    }
}
