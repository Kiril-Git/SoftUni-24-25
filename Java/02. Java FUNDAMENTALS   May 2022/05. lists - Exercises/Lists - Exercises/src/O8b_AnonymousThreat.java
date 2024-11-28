import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O8b_AnonymousThreat {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<String> inputArr = Arrays.stream(sc.nextLine().split(" "))
                .collect(Collectors.toList());

        List<String> outputArr = new ArrayList<>();

        String commands = sc.nextLine();

        while (!commands.equals("3:1")) {

            String[] commandArr = commands.split(" ");

            String command = commandArr[0];
            int startIndex = Integer.parseInt(commandArr[1]);
            int endIndex = Integer.parseInt(commandArr[2]);

            switch (command) {

                case "merge":

                    if (endIndex >= inputArr.size()) {
                        endIndex = inputArr.size()-1;
                    }
                    if (startIndex < 0) {
                        startIndex = 0;
                    }

                    String mergedStr = "";

                    for (int i = startIndex; i <= endIndex; i++) {
                        mergedStr += inputArr.get(i);
                    }

                    for (int i = startIndex; i <= endIndex; i++) {
                        inputArr.remove(startIndex);
                    }

                    if (!mergedStr.isEmpty()) {
                        inputArr.add(startIndex, mergedStr);
                    }

                    break;

                case "divide":
                    int partitions = endIndex;

                    String element = inputArr.remove(startIndex);
                    int partSize = element.length() / partitions;
                    int remainder = element.length() % partitions;

                    List<String> dividedEl = new ArrayList<>();
                    int currentIndex = 0;

                    for (int i = 0; i < partitions; i++) {

                        int currentPartSize = partSize;

                        if (i == partitions - 1) {
                            currentPartSize += remainder;
                        }
                        dividedEl.add(element.substring(currentIndex, currentIndex + currentPartSize));
                        currentIndex += currentPartSize;

            }
            inputArr.addAll(startIndex, dividedEl);
                    break;
        }
            commands = sc.nextLine();
        }

        for (String el : inputArr){
            System.out.print(el + " ");
        }
    }
}
