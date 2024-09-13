package com.ojt.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Fit4LifeApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(Fit4LifeApplication.class, args);
        String activeProfile = context.getEnvironment().getActiveProfiles().length == 0 ? "default" : String.join(",", context.getEnvironment().getActiveProfiles());
        System.out.println("Active Profile: " + activeProfile);
    }
}

