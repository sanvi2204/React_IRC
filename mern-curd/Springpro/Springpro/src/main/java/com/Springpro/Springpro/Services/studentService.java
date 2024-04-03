package com.Springpro.Springpro.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Springpro.Springpro.Entity.student;
import com.Springpro.Springpro.Repository.studentRepo;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class studentService {
    @Autowired
    private studentRepo studentrepo;
    
    public student saveDetails(student s){
        return studentrepo.save(s);
    }
    public List<student> getAllUser(){
        return studentrepo.findAll();
    }

    public student updateUser(String email, student user) {
        Optional<student> userExists = studentrepo.findByEmail(email);
        if (userExists.isPresent()) {
            student existingUser = userExists.get();
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            return studentrepo.save(existingUser);
        }
        return new student();
    }

    public String deleteUser(String email) {
        boolean userExists = studentrepo.existsByEmail(email);
        System.out.println(userExists);
        if (userExists) {
            studentrepo.deleteByEmail(email);
            return "User deleted successfully!";
        }
        return "Record not found with email id " + email;
    }
    public student updateUserBy(String email, student user) {
        Optional<student> userExists = studentrepo.findByEmail(email);
        return userExists.map(existingUser -> {
            Optional.ofNullable(user.getPassword()).ifPresent(existingUser::setPassword);
            return studentrepo.save(existingUser);
        }).orElse(new student());
    }
}