
import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import './Navbar.css';
import img1 from './botaye.png'

function Navbar(){
      return(
          <div >
            <div class="fixed-top">
         <nav  className="navbar navbar-expand-lg center topnav  navbar-white bg-white">
  <div className="container">
    <Link className="navbar-brand "  to='/' element='true'>
        <img  src={img1} className="im" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ggap ">
        <li className="nav-item">
          <NavLink className="nav-link  "  aria-current="page" to ='/' elemenet='true'>Our Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to='/whoarewe' element='true'>Who Are We</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to='./ourvalues' element='true'>Our Values</NavLink>
        </li> <li className="nav-item">
          <NavLink className="nav-link " to='./ourvalues' element='true'>Carees</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to='/ourproject' element='true'>Our Project</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to='/whychooseus' element='true'>Why Choose Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
          </div>
      )
}
export default Navbar;