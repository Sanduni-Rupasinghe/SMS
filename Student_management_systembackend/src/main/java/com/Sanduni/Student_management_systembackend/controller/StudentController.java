package com.Sanduni.Student_management_systembackend.controller;

import com.Sanduni.Student_management_systembackend.exception.StudentNotFoundException;
import com.Sanduni.Student_management_systembackend.model.Student;
import com.Sanduni.Student_management_systembackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin ("http://localhost:3000")
public class StudentController {

      @Autowired
      private StudentRepository studentRepository;

      @PostMapping("/student")
      Student newStudent(@RequestBody Student newStudent){
          return studentRepository.save(newStudent);
      }

      @GetMapping("/students")
      List<Student>getAllUsers(){
            return studentRepository.findAll();
      }

      @GetMapping("/student/{id}")
      Student getStudentById(@PathVariable Long id){
            return studentRepository.findById(id)
                    .orElseThrow(()->new StudentNotFoundException(id));
      }

      @PutMapping("/student/{id}")
      Student updateStudent(@RequestBody Student newStudent,@PathVariable Long id) {
          return studentRepository.findById(id)
                  .map(student -> {
                      student.setFirstName(newStudent.getFirstname());
                      student.setLastname(newStudent.getLastname());
                      student.setEmail(newStudent.getEmail());
                      student.setDob(newStudent.getDob());
                      student.setDegree(newStudent.getDegree());
                      return studentRepository.save(student);

                  }).orElseThrow(() -> new StudentNotFoundException(id));
      }

      @DeleteMapping("/student/{id}")
      String deleteStudent(@PathVariable Long id){
          if(!studentRepository.existsById(id)){
              throw new StudentNotFoundException(id);
          }
          studentRepository.deleteById(id);
          return "Student with id "+id+" has been deleted success.";
      }
}
