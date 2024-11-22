import java.util.Scanner;

public class O8_LowerOrUpper {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char ch = sc.next().charAt(0);

        if (ch >= 'A' && ch <= 'Z'){
            System.out.println("upper-case");
        }
        else if (ch >= 'a' && ch <= 'z'){
            System.out.println("lower-case");
        }

    }
}
