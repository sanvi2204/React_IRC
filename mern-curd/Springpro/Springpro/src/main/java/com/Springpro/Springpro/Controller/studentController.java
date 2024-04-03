package com.Springpro.Springpro.Controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Springpro.Springpro.Entity.student;
import com.Springpro.Springpro.Services.studentService;

@RestController
public class studentController {
    @Autowired
     private studentService studentservice;


     @PostMapping("/addstudent")
     public student postDetails(@RequestBody student s){
   
        return studentservice.saveDetails(s);
     }

     @GetMapping("/getAll")
     public ResponseEntity<?>getAllUser(){
      try{
         return new ResponseEntity<>(studentservice.getAllUser(),HttpStatus.OK);
      }
      catch(Exception e){
         return new ResponseEntity<>("Something went wrong",HttpStatus.EXPECTATION_FAILED);
      }

     }

     @PutMapping("/update/{email}")
    public ResponseEntity<?> updateUser(@PathVariable String email, @RequestBody student user) {
        try {
            return new ResponseEntity<>(studentservice.updateUser(email, user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }
@DeleteMapping("/delete/{email}")
    public ResponseEntity<?> deleteUser(@PathVariable String email) {
        try {
            return new ResponseEntity<>(studentservice.deleteUser(email), HttpStatus.OK);
        } catch (Exception e) {
         e.printStackTrace();
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }
    @PatchMapping("/patchUpdate/{email}")
    public ResponseEntity<?> updateUserBy(@PathVariable String email, @RequestBody student user) {
        try {
            return new ResponseEntity<>(studentservice.updateUserBy(email, user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
   
      }
   }     
}