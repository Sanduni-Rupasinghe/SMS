import React from 'react';
import {Link} from 'react-router-dom';

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";


export default function Main() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={img1} height="500px" class="card-img-top" alt="..."/>
      <div class="card-body">
    <Link className="btn btn-outline-danger mx-2" to="/home">Home</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img2} height="500px" class="card-img-top" alt="..."/>
      <div class="card-body">
      <Link className="btn btn-outline-danger mx-2" to="/adduser">Add Student</Link>

        </div>
    </div>
  </div>
  
</div>
  )
}
