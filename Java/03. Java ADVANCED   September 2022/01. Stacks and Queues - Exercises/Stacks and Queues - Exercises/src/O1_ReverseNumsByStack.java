import java.util.ArrayDeque;
import java.util.Collections;
import java.util.Scanner;
import java.util.Stack;

public class O1_ReverseNumsByStack {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] inputNumbers = scanner.nextLine().split("\\s+");
        ArrayDeque<String> revNumsStack = new ArrayDeque<>();

        //    Collections.addAll(revNumsStack, inputNumbers);

        for (String inputNumber : inputNumbers) {
            revNumsStack.push(inputNumber);
        }

        for (String el : revNumsStack) {
            System.out.printf("%s ", el);
        }
    }
}
