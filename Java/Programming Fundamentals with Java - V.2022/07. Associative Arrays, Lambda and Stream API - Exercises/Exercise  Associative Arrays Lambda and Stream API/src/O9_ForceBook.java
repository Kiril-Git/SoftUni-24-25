import java.util.*;

public class O9_ForceBook {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String input = sc.nextLine();

        Map<String, List<String>> forceSideMap = new LinkedHashMap<>();

        while (!input.equals("Lumpawaroo")) {
            String[] tokens = input.split("\\s+");

            switch (tokens[tokens.length - 2]) {

                case "|":
                    String forceSide = tokens[0];
                    String forceUser = tokens[2];

                    if (!forceSideMap.containsKey(forceSide)) {
                        forceSideMap.put(forceSide, new ArrayList<>());
                    }
                    //  cheque all fourSides for the current force user.
                    if (!anyForceSideContainsForceUser(forceSideMap, forceUser)) {
                        forceSideMap.get(forceSide).add(forceUser);
                    }
                    break;

                    case "->":
                        String[] tokens2 = input.split(" -> ");
                        String fUser = tokens2[0];
                        String fSide = tokens2[1];

                        if (!forceSideMap.containsKey(fSide)) {
                            forceSideMap.put(fSide, new ArrayList<>());
                        }
                        //  cheque all fourSides for the current force user.
                        if (!anyForceSideContainsForceUser(forceSideMap, fUser)) {
                            forceSideMap.get(fSide).add(fUser);
                        }
                        else {
                            anyForceSideRemoveForceUser(forceSideMap, fUser);
                            forceSideMap.get(fSide).add(fUser);
                            forceSideMap.entrySet().removeIf(entry -> entry.getValue().isEmpty());
                        }
                        System.out.println(fUser + " joins the " + fSide + " side!");
                        break;


            }

            input = sc.nextLine();
        }

        forceSideMap.forEach((side, member) -> {
            System.out.printf("Side: %s, Members: %d\n", side, member.size());
        });

        forceSideMap.forEach((side, members) -> {
            members.forEach(member -> System.out.printf("! %s%n", member));
        });


    }



    private static void anyForceSideRemoveForceUser(Map<String, List<String>> forceSideMap, String fUser) {

        forceSideMap.entrySet()
                .stream()
                .anyMatch(entry -> entry.getValue().remove(fUser));

    }


    private static boolean anyForceSideContainsForceUser(Map<String, List<String>> forceSideMap, String forceUser) {

        return forceSideMap.entrySet()
                .stream()
                .anyMatch(entry -> entry.getValue().contains(forceUser));
    }


}
