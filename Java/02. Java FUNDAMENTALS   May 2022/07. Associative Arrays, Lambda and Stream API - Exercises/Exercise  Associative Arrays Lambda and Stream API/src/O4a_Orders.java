import java.util.*;

public class O4a_Orders {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String productInput = sc.nextLine();
        Map<String, Product> products = new LinkedHashMap<>();

        while (!productInput.equals("buy")) {
            String[] tokens = productInput.split("\\s+");

            String productName = tokens[0];
            double productPrice = Double.parseDouble(tokens[1]);
            int quantity = Integer.parseInt(tokens[2]);

            Product product = new Product(productName, productPrice, quantity);

            if (!products.containsKey(productName)) {
                products.put(productName, product);

            }
            else {
                products.get(productName).setPrice(productPrice);
                products.get(productName).setQuantity(products.get(productName).getQuantity() + quantity);
            }


            productInput = sc.nextLine();
        }
        for (Product el : products.values()) {
        System.out.println(el);
}

    }


    static class Product {
        String name;
        double price;
        int quantity;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public double getPrice() {
            return price;
        }

        public void setPrice(double price) {
            this.price = price;
        }

        public int getQuantity() {
            return quantity;
        }

        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }

        public Product(String name, double price, int quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;


        }

        @Override
        public String toString() {
            return String.format("%s -> %.2f", name, price * quantity);
        }
    }
}
