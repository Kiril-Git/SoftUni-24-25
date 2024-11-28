import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class O3_Legendary_Farming {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Map<String, Integer> nobleMaterials = new LinkedHashMap<>();
        Map<String, Integer> commonMaterials = new LinkedHashMap<>();

        nobleMaterials.putIfAbsent("shards", 0);
        nobleMaterials.putIfAbsent("fragments", 0);
        nobleMaterials.putIfAbsent("motes", 0);

        boolean obtained = false;

        while (sc.hasNextLine() && !obtained) {
            String line = sc.nextLine();

            if (line.isEmpty()) {
                break;
            }
            String[] tokens = line.split("\\s+");

            for (int i = 0; i < tokens.length-1; i+=2) {

                String prize = "";
                String material = tokens[i+1].toLowerCase();
                int quantity = Integer.parseInt(tokens[i]);

                switch (material) {

                    case "shards", "fragments", "motes":
                        nobleMaterials.put(material, nobleMaterials.get(material) + quantity);

                        if (nobleMaterials.get(material) >= 250) {

                            if (material.equals("shards")) {
                                prize = "Shadowmourne";
                            }
                            else if (material.equals("fragments")) {
                                prize = "Valanyr";
                            }
                            else if (material.equals("motes")) {
                                prize = "Dragonwrath";
                            }

                            System.out.println(prize + " obtained!");
                            nobleMaterials.put(material, nobleMaterials.get(material) -250);

                            obtained = true;
                        }
                        break;

                    default:
                        commonMaterials.putIfAbsent(material, 0);
                        commonMaterials.put(material, commonMaterials.get(material) + quantity);
                }
                if (obtained){
                    break;
                }
            }

        }

        nobleMaterials.forEach((k, v) -> System.out.println(k + ": " + v));
        commonMaterials.forEach((k, v) -> System.out.println(k + ": " + v));
    }
}
