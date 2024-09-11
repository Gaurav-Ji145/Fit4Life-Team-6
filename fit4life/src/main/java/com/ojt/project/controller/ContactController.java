package com.ojt.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojt.project.entity.ContactForm;
import com.ojt.project.service.ContactService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allow all origins, adjust as needed
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping("/submitContactForm")
    public ResponseEntity<String> submitContactForm(@Validated @RequestBody ContactForm contactForm) {
        contactService.saveContactForm(contactForm);
        System.out.println("Contact Details Stored");
        return new ResponseEntity<>("Form submitted successfully!", HttpStatus.OK);
    }

    @ExceptionHandler
    public ResponseEntity<String> handleException(Exception e) {
        // Log the exception or handle it as needed
        return new ResponseEntity<>("An error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}