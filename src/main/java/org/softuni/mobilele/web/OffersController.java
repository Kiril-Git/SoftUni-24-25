package org.softuni.mobilele.web;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/offers")
@Data
@AllArgsConstructor
public class OffersController {

    @GetMapping("/all")
    public String all() {
        return "offers";
    }




}
