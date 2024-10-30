import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        String greeting =  "Hello, ";
        String name = sc.nextLine();
        String result = greeting.concat(name);

        System.out.println(result);



    }
}