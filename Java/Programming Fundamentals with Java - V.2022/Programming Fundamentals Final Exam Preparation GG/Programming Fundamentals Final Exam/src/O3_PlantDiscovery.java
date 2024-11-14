import java.util.*;

public class O3_PlantDiscovery {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputIterations = Integer.parseInt(sc.nextLine());
        Map<String, Plant> plantMap = new LinkedHashMap<>();

        for (int i = 0; i < inputIterations; i++) {

            String[] inputPlant = sc.nextLine().split("<->");
            String plantName = inputPlant[0];
            int plantRarity = Integer.parseInt(inputPlant[1]);

            Plant pl = new Plant(plantName, plantRarity, new ArrayList<>());

            plantMap.put(plantName, pl);
        }

        String inputRatings = sc.nextLine();

        while (!inputRatings.equals("Exhibition")) {
            String[] inputRating = inputRatings.split(": ");

            String plantName = "";
            double plantRating = 0.0;

            switch (inputRating[0]) {
                case "Rate":
                    String[] ratingStr = inputRating[1].split(" - ");
                    plantName = ratingStr[0];
                    plantRating = Double.parseDouble(ratingStr[1]);

                    if(plantMap.containsKey(plantName)) {
                        plantMap.get(plantName).addRatings(plantRating);
                    }
                    else {
                        System.out.println("error");
                    }
/*                    plantMap.get(plantName).setRatings(Collections.singletonList(plantRating));   */
                    break;

                case "Update":
                    ratingStr = inputRating[1].split(" - ");
                    plantName = ratingStr[0];
                    int newRarity = Integer.parseInt(ratingStr[1]);

                    if(plantMap.containsKey(plantName)) {
                        plantMap.get(plantName).setRarity(newRarity);
                    }
                    else {
                        System.out.println("error");
                    }
                    break;

                case "Reset":
                    plantName = inputRating[1];

                    if(plantMap.containsKey(plantName)) {
                        plantMap.get(plantName).resetRatings();
                    }
                    else {
                        System.out.println("error");
                    }
                    break;

                default:
                    System.out.println("error");

            }
            inputRatings = sc.nextLine();
        }


        System.out.println("Plants for the exhibition:");

        for (Map.Entry<String, Plant> entry : plantMap.entrySet()) {
            Plant plant = entry.getValue();
            System.out.printf("- %s; Rarity: %d; Rating: %.2f\n",
                    entry.getKey(), entry.getValue().getRarity(), entry.getValue().getAverageRating());
        }
    }



    static class Plant {

        String name;
        int rarity;
        List<Double> ratings;


        public Plant(String name, int rarity, List<Double> ratings) {
            this.name = name;
            this.rarity = rarity;
            this.ratings = ratings;
        }


        public void addRatings(double rating) {
            ratings.add(rating);
        }

        public double getAverageRating() {
            if (ratings.isEmpty()) return 0;
            return ratings.stream().mapToDouble(rating -> rating).average().orElse(0.0);
        }

        public void resetRatings() {
        ratings.clear();
    }

        public String getName() {
            return name;
        }

        public int getRarity() {
            return rarity;
        }

        public void setRarity(int rarity) {
            this.rarity = rarity;
        }
    }
}
