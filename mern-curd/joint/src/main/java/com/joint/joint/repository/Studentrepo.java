package com.joint.joint.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.joint.joint.Entity.StudentEntity;

@Repository
public interface Studentrepo extends JpaRepository<StudentEntity,Integer>{
  
}