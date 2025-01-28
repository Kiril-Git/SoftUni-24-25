package phonebook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import phonebook.entity.Contact;


import java.util.Map;
import java.util.TreeMap;

@Controller
public class ContactController {
    Map<String, Contact> contacts;

    public ContactController() {
        this.contacts = new TreeMap<>();
    }

    @GetMapping("/")
    public ModelAndView home(ModelAndView modelAndView) {
        modelAndView.setViewName("index");
        modelAndView.addObject("contacts", this.contacts);
        return modelAndView;
    }

    @PostMapping("/")
    public String add(Contact contact) {
        // Adds a new contact to the map using the provided name as the key.
        this.contacts.put(contact.getName(), contact);
        return "redirect:/"; // Redirect back to the home page.
    }

    @GetMapping("/edit/{name}")
    public ModelAndView editForm(@PathVariable String name, ModelAndView modelAndView) {
        // Fetch the contact by name and pass it to the "edit" view.
        modelAndView.setViewName("edit");
        modelAndView.addObject("contact", this.contacts.get(name));
        return modelAndView;
    }

    @PutMapping("/edit/{name}")
    public String edit(@PathVariable String name, Contact contact) {
        // Retrieve and update the contact's name and number.
        Contact existingContact = this.contacts.remove(name); // Remove the old entry by name.
        if (existingContact != null) {
            existingContact.setName(contact.getName());
            existingContact.setNumber(contact.getNumber());
            this.contacts.put(contact.getName(), existingContact); // Add the updated contact back.
        }
        return "redirect:/"; // Redirect to the home page.
    }

    @DeleteMapping("/delete/{name}")
    public String delete(@PathVariable String name) {
        // Remove the contact from the map by name.
        this.contacts.remove(name);
        return "redirect:/"; // Redirect to the home page.
    }
}
