import java.util.Scanner;

public class O9_PalindromeIntegers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputNums = sc.nextLine();

        getPalindromes(inputNums);


        while (!inputNums.equals("END")) {

            boolean isPalindrome = getPalindromes(inputNums);

            System.out.println(isPalindrome);


            inputNums = sc.nextLine();
        }

        }



    private static boolean getPalindromes(String inputNums) {

        boolean isPalindrome = true;

        for (int i = 0; i < inputNums.length() / 2; i++) {

            char startChar = inputNums.charAt(i);
            char endChar = inputNums.charAt(inputNums.length() - i - 1);

            if (startChar != endChar) {
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
    }


}
