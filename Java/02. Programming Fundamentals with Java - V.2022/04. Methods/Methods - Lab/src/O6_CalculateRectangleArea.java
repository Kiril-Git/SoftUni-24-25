import java.util.Scanner;

public class O6_CalculateRectangleArea {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int firstNumber = Integer.parseInt(sc.nextLine());
        int secondNumber = Integer.parseInt(sc.nextLine());

        double rectangleArea = calculateRectangleArea(firstNumber, secondNumber);

        System.out.println((int)rectangleArea);
    }


    private static double calculateRectangleArea(double sideA, double sideB) {

        double area = sideA * sideB;
        return area;
    }
}
