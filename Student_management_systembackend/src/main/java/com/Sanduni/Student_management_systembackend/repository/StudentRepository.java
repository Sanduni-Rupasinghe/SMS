package com.Sanduni.Student_management_systembackend.repository;

import com.Sanduni.Student_management_systembackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository <Student,Long> {

}
