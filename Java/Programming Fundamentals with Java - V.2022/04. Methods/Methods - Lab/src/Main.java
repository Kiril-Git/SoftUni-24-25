import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        String name = sc.nextLine();
        int age = Integer.parseInt(sc.nextLine());
        double grade = Double.parseDouble(sc.nextLine());

        int startNum = Integer.parseInt(sc.nextLine());
        int endNum = Integer.parseInt(sc.nextLine());

        printStudentData(name, age, grade);

        printNums(startNum, endNum);


        System.out.println();
        printHello();

    }

    public static void printHello() {
        System.out.println("Hello honey \uD83E\uDD29");
    }


    public static void printNums(int startN, int endN) {
        for (int i = startN; i <= endN; i++) {
            System.out.print(i + " ");
        }

    }

    public static void printStudentData(String studentName, int age, double grade) {
        System.out.printf("Student name: %s, Age: %d, Grade: %.2f\n",studentName, age, grade);
    }
}