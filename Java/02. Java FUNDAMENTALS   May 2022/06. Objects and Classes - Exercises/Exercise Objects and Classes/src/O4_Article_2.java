import java.util.Scanner;

public class O4_Article_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int articlesCount = Integer.parseInt(sc.nextLine());

        for (int i = 0; i < articlesCount; i++) {
            String[] article = sc.nextLine().split(", ");

            String articleName = article[0];
            String articleDescription = article[1];
            String articleAuthor = article[2];

            Article newArticle = new Article(articleName, articleDescription, articleAuthor);
            System.out.println(newArticle);
        }


    }

    static class Article{
        String title;
        String content;
        String author;

        public Article(String title, String content, String author) {
            this.title = title;
            this.content = content;
            this.author = author;
        }


        @Override
        public String toString() {
            return this.title + " - " + this.content + ": " + this.author;
        }
    }
}
