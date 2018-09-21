package de.stevenschwenke.java;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/coffee-specialties")
public class CoffeeSpecialtiesController {

    @GetMapping
    public List<String> getCoffeeSpecialties() {
        return new ArrayList<>(){{
            add("Espresso");
            add("Cappuccino");}};
    }

}
