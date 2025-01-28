import java.util.*;

public class O3_Pirates {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputTowns = sc.nextLine();
        Map<String, Town> townMap = new LinkedHashMap<>();

        while (!inputTowns.equals("Sail")) {

            String[] townData = inputTowns.split("\\|\\|");
            String townName = townData[0];
            int townPopulation = Integer.parseInt(townData[1]);
            int goldVal = Integer.parseInt(townData[2]);

            Town town = new Town(townName, townPopulation, goldVal);

            if (!townMap.containsKey(townName)) {
                townMap.put(townName, town);
            }
            else {
                Town existingTown = townMap.get(townName);
                existingTown.setPopulation(existingTown.getPopulation() + townPopulation);
                existingTown.setGoldValue(existingTown.getGoldValue() + goldVal);

/*                townMap.get(townName).setPopulation(town.getPopulation() + townPopulation);
                townMap.get(townName).setGoldValue(town.getGoldValue() + goldValue);
                */
            }

            inputTowns = sc.nextLine();
        }


        inputTowns = sc.nextLine();
        while (!inputTowns.equals("End")) {

            String[] command = inputTowns.split("=>");
            String townName = command[1];

            switch (command[0]) {

                case "Plunder":
                    int casualties = Integer.parseInt(command[2]);
                    int goldLooted = Integer.parseInt(command[3]);

                    int townPopulation = townMap.get(townName).getPopulation();
                    int goldValue = townMap.get(townName).getGoldValue();

                    if (townPopulation >= casualties && goldValue >= goldLooted) {
                        townMap.get(townName).setPopulation(townPopulation - casualties);
                        townMap.get(townName).setGoldValue(goldValue - goldLooted);
                        System.out.printf("%s plundered! %d gold stolen, %d citizens killed.\n"
                                , townName, goldLooted, casualties);
                    }

                    if (townMap.get(townName).getPopulation() <= 0 || townMap.get(townName).getGoldValue() <= 0) {
                        System.out.printf("%s has been wiped off the map!\n", townName);
                        townMap.remove(townName);
                    }
                    break;

                case "Prosper":
                    int gold = Integer.parseInt(command[2]);
                    goldValue = townMap.get(townName).getGoldValue();

                    if (gold < 0) {
                        System.out.println("Gold added cannot be a negative number!");
                        inputTowns = sc.nextLine();
                        continue;
                    }

                    townMap.get(townName).setGoldValue(goldValue + gold);
                    System.out.printf("%d gold added to the city treasury. %s now has %d gold.\n", gold, townName, goldValue + gold);
                    break;
            }

            inputTowns = sc.nextLine();
        }

        if (townMap.isEmpty()) {
            System.out.println("Ahoy, Captain! All targets have been plundered and destroyed!");
        }
        else {
            System.out.printf("Ahoy, Captain! There are %d wealthy settlements to go to:\n", townMap.size());
        }

/*        for (Town el : townMap.values()) {
            System.out.println(el);
        }*/

        townMap.values().forEach(System.out::println);
    }



    static class Town {

        String name;
        int population;
        int goldValue;

        Town(String name, int population, int goldValue) {
            this.name = name;
            this.population = population;
            this.goldValue = goldValue;
        }


        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getPopulation() {
            return population;
        }

        public void setPopulation(int population) {
            this.population = population;
        }

        public int getGoldValue() {
            return goldValue;
        }

        public void setGoldValue(int goldValue) {
            this.goldValue = goldValue;
        }

        @Override
        public String toString() {
            return String.format("%s -> Population: %d citizens, Gold: %d kg", name, population, goldValue);
        }
    }
}
