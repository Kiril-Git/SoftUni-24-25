import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class O2_Miners {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        String inputResource = sc.nextLine();
        Map<String, Integer> resourcesMap = new LinkedHashMap<>();

        while (!inputResource.equals("stop")){
            int value = Integer.parseInt(sc.nextLine());

            resourcesMap.putIfAbsent(inputResource, 0);
            resourcesMap.put(inputResource, resourcesMap.get(inputResource) + value);

/*
            if (resourcesMap.containsKey(inputResource)){
                resourcesMap.put(inputResource, resourcesMap.get(inputResource)+value);
            }
            else {
                resourcesMap.put(inputResource, value);
            }

            */

            inputResource = sc.nextLine();
        }


        resourcesMap.forEach((key, value) -> System.out.println(key + " -> " + value));
    }
}
