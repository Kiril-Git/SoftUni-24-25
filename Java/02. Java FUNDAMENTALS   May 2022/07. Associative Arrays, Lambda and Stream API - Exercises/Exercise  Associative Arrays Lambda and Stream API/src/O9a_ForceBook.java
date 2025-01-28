import java.util.*;

public class O9a_ForceBook {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String input = sc.nextLine();
        Map<String, List<String>> forceBookMap = new LinkedHashMap<>();

        while (!input.equals("Lumpawaroo")) {
            if (input.contains(" | ")) {
                String[] tokens = input.split(" \\| ");
                String forceSide = tokens[0];
                String forceUser = tokens[1];

                forceBookMap.putIfAbsent(forceSide, new ArrayList<>());

                if (!anyForceSideContainsForceUser(forceBookMap, forceUser)) {
                    forceBookMap.get(forceSide).add(forceUser);
                }
            } else if (input.contains(" -> ")) {
                String[] tokens = input.split(" -> ");
                String forceUser = tokens[0];
                String forceSide = tokens[1];

                anyForceSideRemoveForceUser(forceBookMap, forceUser);

                forceBookMap.putIfAbsent(forceSide, new ArrayList<>());
                forceBookMap.get(forceSide).add(forceUser);
                System.out.println(forceUser + " joins the " + forceSide + " side!");
            }

            input = sc.nextLine();
        }

        forceBookMap.forEach((key, value) -> {
            if (!value.isEmpty()) {
                System.out.printf("Side: %s, Members: %d%n", key, value.size());
                value.forEach(el -> System.out.printf("! %s%n", el));
            }
        });
    }



    private static void anyForceSideRemoveForceUser(Map<String, List<String>> forceBookMap, String fUser) {
        forceBookMap.values().forEach(el -> el.remove(fUser));
//        forceSideMap.forEach((k, v) -> v.remove(fUser));
    }

    private static boolean anyForceSideContainsForceUser(Map<String, List<String>> forceBookMap, String forceUser) {
        return forceBookMap.values().stream().anyMatch(el -> el.contains(forceUser));
    }
}
