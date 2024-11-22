package phonebook.entity;

public class Contact {
     String name;
     String number;

    public Contact() {
    }


    public Contact(String name, String number) {
        this.name = name;
        this.number = number;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // Getter for number
    public String getNumber() {
        return number;
    }

    // Setter for number
    public void setNumber(String number) {
        this.number = number;
    }
}
