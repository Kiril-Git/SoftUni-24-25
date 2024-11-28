import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O10_SoftUniCoursePlanning {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        List<String> moduleList = Arrays.stream(sc.nextLine().split(", "))
                .collect(Collectors.toList());

        String inputCommands = sc.nextLine();

        while (!inputCommands.equals("course start")) {

            String[] commands = inputCommands.split(":");
            String moduleName = commands[1];

            switch (commands[0]) {

                case "Add":
                    if (!moduleList.contains(moduleName)) {
                        moduleList.add(moduleName);
                    }
                    break;

                case "Insert":
                    int index = Integer.parseInt(commands[2]);

                    if (!moduleList.contains(moduleName)) {
                        moduleList.add(index, moduleName);
                    }
                    break;

                case "Remove":

                    moduleList.remove(moduleName);
                    removeExercise(moduleList, moduleName);
                    break;

                case "Swap":
                    String moduleName2 = commands[2];

                    if (moduleList.contains(moduleName2) && moduleList.contains(moduleName)) {

                        int index2 = moduleList.indexOf(moduleName2);
                        int index1 = moduleList.indexOf(moduleName);

                        moduleList.set(index1, moduleName2);        //    Collections.swap(moduleList, index1, index2);
                        moduleList.set(index2, moduleName);

                        swapExercises(moduleList, moduleName, moduleName2);
                    }
                    break;

                case "Exercise":
                    String tempStr = moduleName + "-Exercise";

                    if (!moduleList.contains(moduleName)) {
                        moduleList.add(moduleName);
                        moduleList.add(tempStr);
                    }
                    else {
                        int index2 = moduleList.indexOf(moduleName) + 1;

                        if (!moduleList.contains(tempStr)) {
                            moduleList.add(index2, tempStr);
                        }
                    }
                        break;
            }

            inputCommands = sc.nextLine();
        }

        for (int i = 0; i < moduleList.size(); i++) {
            System.out.printf("%d.%s\n", i+1, moduleList.get(i));
        }
    }


    private static void removeExercise(List<String> moduleList, String moduleName) {

        String tempStr = moduleName + "-Exercise";
        moduleList.remove(tempStr);
    }


    private static void swapExercises(List<String> moduleList, String moduleName, String moduleName2) {

        int index2 = moduleList.indexOf(moduleName2)+1;
        int index1 = moduleList.indexOf(moduleName)+1;
        String tempStr1 = moduleName + "-Exercise";
        String tempStr2 = moduleName2 + "-Exercise";

        if (moduleList.contains(tempStr1)) {
            moduleList.remove(tempStr1);
            moduleList.add(index1, tempStr1);
        }
        if (moduleList.contains(tempStr2)) {
            moduleList.remove(tempStr2);
            moduleList.add(index2, tempStr2);
        }
    }
}
