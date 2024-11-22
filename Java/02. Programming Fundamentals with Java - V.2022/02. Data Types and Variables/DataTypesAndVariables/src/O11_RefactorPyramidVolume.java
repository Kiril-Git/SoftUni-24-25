import java.util.Scanner;

public class O11_RefactorPyramidVolume {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double length = Double.parseDouble(sc.nextLine());
        double width = Double.parseDouble(sc.nextLine());
        double height = Double.parseDouble(sc.nextLine());

        double volume = length * width * height / 3;


        System.out.printf("Length: Width: Height: Pyramid Volume: %.2f", volume);

    }
}
