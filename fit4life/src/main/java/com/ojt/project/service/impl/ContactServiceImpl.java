package com.ojt.project.service.impl;

import com.ojt.project.entity.ContactForm;
import com.ojt.project.repository.ContactFormRepository;
import com.ojt.project.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactServiceImpl implements ContactService {

    private final ContactFormRepository contactFormRepository;

    @Autowired
    public ContactServiceImpl(ContactFormRepository contactFormRepository) {
        this.contactFormRepository = contactFormRepository;
    }

    @Override
    public void saveContactForm(ContactForm contactForm) {
        contactFormRepository.save(contactForm);
    }
}