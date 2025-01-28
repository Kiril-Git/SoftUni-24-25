package com.resellerapp.model;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;

public class UserRegisterBindingModel {

    @Length(min = 3, max = 20)
    private static String username;

    @Email
    private String email;

    @Length(min = 3, max = 20)
    private String password;


    private String confirmPassword;


    public static @Length(min = 3, max = 20) String getUsername() {
        return username;
    }

    public void setUsername(@Length(min = 3, max = 20) String username) {
        this.username = username;
    }

    public @Email String getEmail() {
        return email;
    }

    public void setEmail(@Email String email) {
        this.email = email;
    }

    public @Length(min = 3, max = 20) String getPassword() {
        return password;
    }

    public void setPassword(@Length(min = 3, max = 20) String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
