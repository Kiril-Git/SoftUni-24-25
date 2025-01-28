import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class O3_SoftUniBarIncome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String regexInput = sc.nextLine();
        Pattern regexPattern = Pattern.compile("%([A-Z][a-z]+)%[^|$%.]*?<(\\w+)>[^|$%.]*?\\|([0-9]+)\\|[^|$%.]*?([0-9]+\\.?[0-9]*)\\$");

        double totalIncome = 0;

        while (!regexInput.equals("end of shift")){
            Matcher matcher = regexPattern.matcher(regexInput);

            if (matcher.find()) {

            double price = Double.parseDouble(matcher.group(4));
            int quantity = Integer.parseInt(matcher.group(3));
            totalIncome += price * quantity;

            System.out.printf("%s: %s - %.2f\n", matcher.group(1), matcher.group(2), price * quantity);
        }

        regexInput = sc.nextLine();
        }

        System.out.printf("Total income: %.2f\n",  totalIncome);
    }
}
