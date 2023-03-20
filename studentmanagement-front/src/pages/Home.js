import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';



export default function Home() {

  const [students,setStudents]=useState([]);

  const {id}=useParams();

  useEffect(() => {
    loadStudents();
    
  }, []);

  const loadStudents=async()=>{
    const result=await axios.get("http://localhost:8080/students")
    setStudents(result.data);
  }

  const deleteStudent=async (id)=>{
    await axios.delete(`http://localhost:8080/student/${id}`)
    loadStudents()
  }


  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">DoB</th>
      <th scope="col">Degree</th>
      <th scope="col">Action</th>


    </tr>
  </thead>
  <tbody>
    {
        students.map((student,index)=>(
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{student.firstname} </td>
      <td>{student.lastname} </td>
      <td>{student.email} </td>
      <td>{student.dob} </td>
      <td>{student.degree} </td>
      <td>
        <Link className="btn btn-primary mx-2" to ={`/viewUser/${student.id}`}>View</Link>
        <Link className="btn btn-outline-success mx-2" 
          to={`/editUser/${student.id}`}
        >
        Edit</Link>
        <button className="btn btn-danger mx-2"
        onClick={()=>deleteStudent(student.id)}>
        
        Delete</button>
      </td>
    
    
    </tr>
        ))
        
    }
    
  </tbody>
</table>
        </div>
    </div>
  )
}
