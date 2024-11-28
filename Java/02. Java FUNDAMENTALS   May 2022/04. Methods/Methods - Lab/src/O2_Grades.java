import java.util.Scanner;

public class O2_Grades {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        double inputGrade = Double.parseDouble(sc.nextLine());

        printGradeDescription(inputGrade);


    }

    public static void printGradeDescription(double grade) {
        if (grade >= 2.0 && grade < 3.0) {
            System.out.println("Fail");
        }
        else if (grade < 3.5) {
            System.out.println("Poor");
        }
        else if (grade < 4.5) {
            System.out.println("Good");
        }
        else if (grade < 5.5) {
            System.out.println("Very good");
        }
        else if (grade <= 6.0) {
            System.out.println("Excellent");
        }
    }


}
