import java.util.Scanner;

public class O3_Elevator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int people = Integer.parseInt(input.nextLine());
        int capacity = Integer.parseInt(input.nextLine());

        int fullCourses = people / capacity;
        int extraCourse = people - fullCourses * capacity;


        if (extraCourse > 0){
            System.out.println(fullCourses + 1);
        }
        else {
            System.out.println(fullCourses);

        }
    }
}
