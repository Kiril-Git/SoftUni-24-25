import java.util.Scanner;

public class O3_ExtractFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inputFilePath = sc.nextLine().split("\\\\");

        String[] filePathEnd = inputFilePath[inputFilePath.length - 1].split("\\.");
        String fileName = filePathEnd[0];
        String fileExtension = filePathEnd[1];


        System.out.println("File name: " + fileName);
        System.out.println("File extension: " + fileExtension);
    }
}
