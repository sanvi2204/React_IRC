package com.joint.joint.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;


import jakarta.persistence.CascadeType;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;


@Entity
@Table(name="student")
public class StudentEntity {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
private String name;
private int age;
@OneToMany(cascade=CascadeType.ALL)
@JoinColumn(name="std_id")
private List<courseEntity> course;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
public List<courseEntity> getCourse() {
	return course;
}
public void setCourse(List<courseEntity> course) {
	this.course = course;
}

}