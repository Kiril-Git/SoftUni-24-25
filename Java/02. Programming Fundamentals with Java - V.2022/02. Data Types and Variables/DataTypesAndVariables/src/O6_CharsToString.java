import java.util.Scanner;

public class O6_CharsToString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char ch1 = sc.next().charAt(0);
        char ch2 = sc.next().charAt(0);
        char ch3 = sc.next().charAt(0);

        String chars = "" + ch1 + ch2 + ch3;


        System.out.println(chars);
    }
}
