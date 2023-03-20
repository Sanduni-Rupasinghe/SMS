package com.Sanduni.Student_management_systembackend;


import com.Sanduni.Student_management_systembackend.model.Student;

import org.junit.jupiter.api.Test;


import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTest {

        @Test
        public void testGetFirstName() {
            Student  user = new Student();
            user.setFirstName("Sanduni");
            assertEquals("Sanduni", user.getFirstname());
        }
        @Test
    public void testGetLastName() {
        Student  user = new Student();
        user.setFirstName("Rupasinghe");
        assertEquals("Rupasinghe", user.getLastname());
    }
     @Test
    public void testGetEmail() {
        Student  user = new Student();
        user.setEmail("sandu2001@gmail.com");
        assertEquals("sandu2001@gmail.com", user.getEmail());
    }
    @Test
    public void testGetDob() {
        Student  user = new Student();
        user.setDob("2001/12/06");
        assertEquals("2001/12/06", user.getDob());
    }

    @Test
    public void testGetDegree() {
        Student  user = new Student();
        user.setDegree("Computing");
        assertEquals("Computing", user.getDegree());
    }


}


