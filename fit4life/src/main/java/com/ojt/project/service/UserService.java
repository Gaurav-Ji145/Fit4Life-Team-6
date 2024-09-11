package com.ojt.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ojt.project.repository.UserRepository;
import com.ojt.project.entity.User;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Method to authenticate user by email and password
    public User authenticate(String email, String password) {
        Optional<User> userOptional = userRepository.findByEmailAndPassword(email, password);

        // Check if user exists with the given email and password
        if (userOptional.isPresent()) {
            return userOptional.get(); // Return the user if found
        } else {
            return null; // Return null if authentication fails
        }
    }

    // Save a new user to the database
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}