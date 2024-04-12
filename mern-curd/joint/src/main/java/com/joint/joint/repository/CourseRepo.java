package com.joint.joint.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.joint.joint.Entity.courseEntity;

@Repository
public interface CourseRepo extends JpaRepository<courseEntity,Integer>{

}