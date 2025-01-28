import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class O2_Art {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<String> inputArticle = Arrays.stream(sc.nextLine().split(", ")).collect(Collectors.toList());
        int changesCount = Integer.parseInt(sc.nextLine());

        String title = inputArticle.get(0);
        String description = inputArticle.get(1);
        String author = inputArticle.get(2);


        Article article = new Article(title, description, author);


        for (int i = 0; i < changesCount; i++) {
            String[] commandDetails = sc.nextLine().split(": ");

            switch (commandDetails[0]) {

                case "Edit":
                    article.edit(commandDetails[1]);
                    break;

                case "ChangeAuthor":
                    article.changeAuthor(commandDetails[1]);
                    break;

                case "Rename":
                    article.rename(commandDetails[1]);
                    break;
            }
        }

        System.out.println(article);


    }

    static class  Article{
        String title;
        String content;
        String author;



        public Article(String title, String content, String author) {
            this.title = title;
            this.content = content;
            this.author = author;
        }


         void edit(String newContent) {
            content = newContent;
        }

        void changeAuthor(String newAuthor) {
            author = newAuthor;
        }

        void rename(String newTitle) {
            title = newTitle;
        }

        @Override
        public String toString() {
            return this.title + " - " + this.content + ": " + this.author;
        }
    }




}
