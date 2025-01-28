public class Main {
    public static void main(String[] args) {


        String text = "helloWorld";

        System.out.println(text.substring(5));
        System.out.println(text.indexOf("o"));
        System.out.println(text.contains("World"));

        String newGreeting = text.replace("hello", "goodMorning");
        System.out.println(newGreeting);

        StringBuilder sb = new StringBuilder();

        sb.append("Donga ");
        sb.append(System.lineSeparator());
        sb.append("is BIG");
        System.out.println(sb);
        System.out.println();

        sb.insert(6, "dong");
        System.out.println(sb);
        System.out.println();

        sb.replace(6, 9, "boy");
        System.out.println(sb);
        System.out.println();

        sb.deleteCharAt(9);
        System.out.println(sb);


    }
}