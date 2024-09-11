package com.ojt.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ojt.project.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Spring Data JPA will automatically generate the query for you
    User findByEmailAndPassword(String email, String password);

}
