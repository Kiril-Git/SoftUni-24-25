import java.util.*;

public class O4_Orders {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String productInput = sc.nextLine();
        Map<String, List<Double>> products = new LinkedHashMap<>();

        while (!productInput.equals("buy")) {
            String[] tokens = productInput.split("\\s+");

            String productName = tokens[0];
            double productPrice = Double.parseDouble(tokens[1]);
            double quantity = Double.parseDouble(tokens[2]);

            if (!products.containsKey(productName)) {
                products.put(productName, new ArrayList<>());

                products.get(productName).add(productPrice);
                products.get(productName).add((quantity));
            }
            else {
                products.get(productName).set(0, productPrice);
                products.get(productName).set(1, products.get(productName).get(1) + quantity);
            }


            productInput = sc.nextLine();
        }

        products.forEach((key, value) -> {
            double price = value.get(0);
            double quantity = value.get(1);
            double totalPrice = price * quantity;

            System.out.printf("%s -> %.2f\n", key, totalPrice);
        });

    }
}
