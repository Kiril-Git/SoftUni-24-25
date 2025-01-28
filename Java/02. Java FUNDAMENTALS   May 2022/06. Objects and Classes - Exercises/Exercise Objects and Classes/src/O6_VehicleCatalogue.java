import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class O6_VehicleCatalogue {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputVehicleDetails = sc.nextLine();
        List<Vehicle> vehicles = new ArrayList<>();

        double carsHorsepower = 0.0;
        double trucksHorsepower = 0.0;
        int carCount = 0;
        int truckCount = 0;


        while (!inputVehicleDetails.equals("End")) {
            String[] vehicleDetails = inputVehicleDetails.split(" ");

            String vehicleType = vehicleDetails[0];
            if (vehicleType.equals("car")) {
                vehicleType = "Car";
            }
            else if (vehicleType.equals("truck")) {
                vehicleType = "Truck";
            }
            String vehicleModel = vehicleDetails[1];
            String vehicleColor = vehicleDetails[2];
            int vehicleHorsepower = Integer.parseInt(vehicleDetails[3]);

            Vehicle vehicle = new Vehicle(vehicleType, vehicleModel, vehicleColor, vehicleHorsepower);
            vehicles.add(vehicle);

            if (vehicle.getVehicleType().equals("Car")) {
                carsHorsepower += vehicleHorsepower;
                carCount++;
            }
            if (vehicle.getVehicleType().equals("Truck")) {
                trucksHorsepower += vehicleHorsepower;
                truckCount++;
            }

            inputVehicleDetails = sc.nextLine();
        }



        inputVehicleDetails = sc.nextLine();

        while (!inputVehicleDetails.equals("Close the Catalogue")) {

            String model = inputVehicleDetails;

            for (Vehicle el : vehicles) {
                if (el.getVehicleModel().equals(model)) {
                    System.out.println(el);
                }
            }

            inputVehicleDetails = sc.nextLine();
        }

        double avgCarHorsepower = carCount > 0 ? carsHorsepower / carCount : 0;
        double avgTruckHorsepower = truckCount > 0 ? trucksHorsepower / truckCount : 0;

        System.out.printf("Cars have average horsepower of: %.2f.\n", avgCarHorsepower);
        System.out.printf("Trucks have average horsepower of: %.2f.\n", avgTruckHorsepower);
    }



    static class Vehicle{
        String vehicleType;
        String vehicleModel;
        String vehicleColor;
        int vehicleHorsepower;

        public Vehicle(String vehicleType, String vehicleModel, String vehicleColor, int vehicleHorsepower) {
            this.vehicleType = vehicleType;
            this.vehicleModel = vehicleModel;
            this.vehicleColor = vehicleColor;
            this.vehicleHorsepower = vehicleHorsepower;
        }


        public String getVehicleModel() {
            return vehicleModel;
        }

        public String getVehicleType() {
            return vehicleType;
        }



        @Override
        public String toString() {
            return String.format("Type: %s\nModel: %s\nColor: %s\nHorsepower: %d", vehicleType, vehicleModel, vehicleColor, vehicleHorsepower);
        }
    }



}
