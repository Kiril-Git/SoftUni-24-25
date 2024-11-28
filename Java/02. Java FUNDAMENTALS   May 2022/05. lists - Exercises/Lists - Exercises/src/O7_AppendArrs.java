import java.util.Scanner;

public class O7_AppendArrs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        String inputStr = sc.nextLine();

        String[] words = inputStr.split("\\|");

        String result = "";

        for (int i = words.length-1; i >= 0; i--){


            String[] chars = words[i].trim().split("\\s+");

            for (String el : chars){

                if (!el.isEmpty()){
                    result += el + " ";
                }
            }
        }
        System.out.println(result.trim());
    }
}
