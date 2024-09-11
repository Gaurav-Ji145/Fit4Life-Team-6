package com.ojt.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ojt.project.repository.UserRepository;
import com.ojt.project.entity.User;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Other methods...

    public User findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password); // You need to implement this method in UserRepository
    }

    public User saveUser(User user) {
        return userRepository.save(user); // Save the user to the database
    }
}
