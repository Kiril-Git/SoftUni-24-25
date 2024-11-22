import java.util.Scanner;

public class O8_BeerKegs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNum = Integer.parseInt(sc.nextLine());

        String largestModel = "";
        double sizeHolder = 0;

        for (int i = 0; i < inputNum; i++) {

            String model = sc.nextLine();
            double rad = Double.parseDouble(sc.nextLine());
            int height = Integer.parseInt(sc.nextLine());

            double vol = Math.PI * rad * rad * height;

            if (vol > sizeHolder){
                sizeHolder = vol;
                largestModel = model;

            }
        }
        System.out.println(largestModel);
    }
}
