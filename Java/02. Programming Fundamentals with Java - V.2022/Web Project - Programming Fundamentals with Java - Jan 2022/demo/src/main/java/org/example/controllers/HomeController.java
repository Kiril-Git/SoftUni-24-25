package org.example.controllers;

import org.example.models.Student;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Controller
public class HomeController {

    public List<Student> students;

    public HomeController() {
        this.students = new LinkedList<>();
    }

    @GetMapping("/students")
    public ModelAndView home(ModelAndView modelAndView) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Donga", 5.2));
        students.add(new Student("Buzema", 5.1));
        students.add(new Student("Kozhata", 5.5));

        modelAndView.setViewName("index");
        modelAndView.addObject("students", students); // Key updated to "students"

        return modelAndView;
    }


}
