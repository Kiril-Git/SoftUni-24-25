import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class O4_Songs {

     static class Song {

         private String typeList;
         private String name;
         private String time;


         public Song(String typeList, String name, String time) {
             this.typeList = typeList;
             this.name = name;
             this.time = time;
         }

         public String getTypeList() {
             return typeList;
         }

         public void setTypeList(String typeList) {
             this.typeList = typeList;
         }

         public String getName() {
             return name;
         }

         public void setName(String name) {
             this.name = name;
         }

         public String getTime() {
             return time;
         }

         public void setTime(String time) {
             this.time = time;
         }
     }



    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int numberOfSongs = Integer.parseInt(sc.nextLine());
        List<Song> songs = new ArrayList<Song>();

        for (int i = 0; i < numberOfSongs; i++) {
            String[] songData = sc.nextLine().split("_");

            String type = songData[0];
            String name = songData[1];
            String time = songData[2];

            Song song = new Song(type, name, time);
            songs.add(song);
        }

        String filterType = sc.nextLine();

        if (filterType.equals("all")) {

            for (Song song : songs) {
                System.out.println(song.getName());
            }
        }
        else {
            for (Song song : songs) {
                if (song.getTypeList().contains(filterType)) {
                    System.out.println(song.getName());
                }
            }
        }


    }
}
