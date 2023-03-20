import React, { useEffect,useState } from 'react'
import {Link, useParams} from "react-router-dom";
import axios from 'axios';

export default function ViewUser(){

    const [student,setStudent]=useState({
        firstname:"",
        lastname:"",
        email:"",
        dob:"",
        degree:""
    })

    const {id}=useParams();

     useEffect(()=>{
          loadStudents()
     },[]);

     const loadStudents=async ()=>{
        const result=await axios.get(`http://localhost:8081/student/${id}`)
        setStudent(result.data)
     }
    return(
        <div className="container">
      <div className="row">
        <div className= "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h3 clas  sName="text-center m-4">Student Details</h3>

          <div className="card">
            <div className="card-header">
            Details of student id : {student.id}
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>First Name: </b>
              {student.firstname}
              </li>
              <li className="list-group-item">
              <b>Last Name: </b>
              {student.lastname}
              </li>
              <li className="List-group-item">
              <b>Email: </b>
              {student.email}
              </li>
              <li className="list-group-item">
              <b>DOB: </b>
              {student.dob}
              </li>
              <li className="ist-group-item">
              <b>Degree: </b>
              {student.dob}
              </li>
            </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/home"}>Back to Home</Link>
          </div>
          </div>
          </div>

    );
}