import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AddUser() {

       let navigate=useNavigate();

   const [student,setStudent]=useState({
      firstname:"",
      lastname:"",
      email:"",
      dob:"",
      degree:""

   })

  const{firstname,lastname,email,dob,degree}=student;

  const onInputChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value});

  };

  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8081/student",student);
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="row">
        <div className= "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow  bg-light">
          <h3 className="text-center m-4">Register Student</h3>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
             type={"text"}
             className="form-control"
             placeholder="Enter student first name"
             name="firstname"
             value={firstname}
             onChange={(e)=>onInputChange(e)}
              />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
             type={"text"}
             className="form-control"
             placeholder="Enter student last name"
             name="lastname"
             value={lastname}
             onChange={(e)=>onInputChange(e)}
             />

          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
             type={"text"}
             className="form-control"
             placeholder="Enter student email"
             name="email"
             value={email}
             onChange={(e)=>onInputChange(e)}
             />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              DOB
            </label>
            <input
             type={"text"}
             className="form-control"
             placeholder="Enter student DOB"
             name="dob"
             value={dob}
             onChange={(e)=>onInputChange(e)}
             />
          </div>
          <div className="mb-3">
            <label htmlFor="degree" className="form-label">
              Degree
            </label>
            <input
             type={"text"}
             className="form-control"
             placeholder="Enter student degree"
             name="degree"
             value={degree}
             onChange={(e)=>onInputChange(e)}
             />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <Link  className="btn btn-outline-danger mx-2" to="/home">Cancel</Link>
          </form>
          </div>
      </div>
    </div>
  )
}
