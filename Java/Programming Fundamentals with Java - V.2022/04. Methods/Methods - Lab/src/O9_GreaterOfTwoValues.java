import java.util.Scanner;

public class O9_GreaterOfTwoValues {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputType = sc.nextLine();


        switch (inputType) {

            case "string":
                String firstStr = sc.nextLine();
                String secondStr = sc.nextLine();

                System.out.println(getMax(firstStr, secondStr));
                break;

            case "char":
                char firstChar = sc.nextLine().charAt(0);
                char secondChar = sc.nextLine().charAt(0);

                System.out.println(getMax(firstChar, secondChar));
                break;

            case "int":
                int firstInt = sc.nextInt();
                int secondInt = sc.nextInt();
                System.out.println(getMax(firstInt, secondInt));
                break;
        }
    }

    public static String getMax(String first, String second) {

         if (second.compareTo(first) > 0) {
            return second;
        }
         return first;
    }


    private static char getMax(char first, char second) {

         if (first < second) {
            return second;
        }

            return first;

    }

    private static int getMax(int first, int second) {

        if (first > second) {
            return first;
        }
        else if (first < second) {
            return second;
        }
        else {
            return 0;

        }
    }
}