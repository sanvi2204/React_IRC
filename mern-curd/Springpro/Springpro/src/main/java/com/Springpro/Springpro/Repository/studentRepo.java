package com.Springpro.Springpro.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Springpro.Springpro.Entity.student;

public interface studentRepo extends JpaRepository<student,Integer> {
    Optional<com.Springpro.Springpro.Entity.student> findByEmail(String email);
    boolean existsByEmail(String email);

    void deleteByEmail(String email);
}