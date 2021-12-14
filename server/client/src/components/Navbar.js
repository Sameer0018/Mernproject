import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom'; 

import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <Router>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/">Home </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/about">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/login">Login</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/signup">Registration</NavLink>
      </li>
      
      
      </ul>
  </div>
</nav>
</Router>
        </>
    )
}

export default Navbar
