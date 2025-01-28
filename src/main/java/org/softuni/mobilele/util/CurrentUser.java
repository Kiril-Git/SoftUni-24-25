package org.softuni.mobilele.util;

import jakarta.persistence.Column;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;
import lombok.experimental.Accessors;


@Component("currentUser")
@SessionScope
@lombok.Data
@Accessors(chain = true)

public class CurrentUser {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "is_logged")
    private boolean isLogged;

    public String getFullName() {

        return firstName + " " + lastName + ".";
    }

    public void logout() {
        setLogged(false);
        setFirstName(null);
        setLastName(null);
    }


}
