import java.util.Scanner;

public class O11_RageExpenses {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        final int HEADSET_BREAK_RATE = 2;     // Breaks every 2nd game
        final int MOUSE_BREAK_RATE = 3;       // Breaks every 3rd game
        final int KEYBOARD_BREAK_RATE = 6;    // Breaks every 6th game (both mouse and headset are broken)
        final int DISPLAY_BREAK_RATE = 12;     // Breaks every 2nd keyboard broken

        int lostGames = Integer.parseInt(sc.nextLine());
        double headsetPrice = Double.parseDouble(sc.nextLine());
        double mousePrice = Double.parseDouble(sc.nextLine());
        double keyboardPrice = Double.parseDouble(sc.nextLine());
        double displayPrice = Double.parseDouble(sc.nextLine());

        int headsets = lostGames / HEADSET_BREAK_RATE;
        int mouses = lostGames / MOUSE_BREAK_RATE;
        int keyboards = lostGames / KEYBOARD_BREAK_RATE;
        int displays = lostGames / DISPLAY_BREAK_RATE;

        double sumHeadsets = headsetPrice * headsets;
        double sumMouses = mousePrice * mouses;
        double sumKeyboards = keyboardPrice * keyboards;
        double sumDisplays = displayPrice * displays;

        double total = sumHeadsets + sumMouses + sumKeyboards + sumDisplays;


        System.out.printf("Rage expenses: %.2f lv.", total);
    }
}
