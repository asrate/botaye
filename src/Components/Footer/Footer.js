import React from "react";
import "./Footer.css";
import log from "./log.png";

function Footer() {
  return (
    <div
      className="container-fluid footer "
      style={{ padding: "80px 0px", background: "black" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <img src={log} alt="" style={{marginBotto:"24px"}} />
            <h5 style={{ color: "white" }}>You have got <span style={{color:"yellow"}}>problems,</span> </h5>
            <h5 style={{ color: "white",marginBottom:"48px" }}>We have got <span style={{color:"yellow"}}> solutions.</span></h5>
          </div>
          <div className="col-lg-3 col-12">
            <h5 style={{ color: "white", marginBottom:"24px" }}>Botaye</h5>
            <div>   <ul style={{ listStyle: "none" , marginLeft:"-34px" }}>
              <li>Our Services</li>
              <li>Who We Are</li>
              <li>Our Values</li>
              <li>Our Projects</li>
              <li>Why Choose US</li>
              <li>Carees</li>
             
            </ul></div>
         
          </div>
          <div className="col-lg-3 col-12">
            <div>
               <h5 style={{ color: "white", marginBottom:"24px" }}>Contact Info</h5>
            </div>
           <div>
             <ul style={{ listStyle: "none", marginLeft:"-34PX" }}>
              <li>contact@botayedatascience.com</li>
              
              <li>+ 251 11 663 1080</li>
              <li>AB STAR, 3rd Floor</li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
           </div>
           
          </div>
          <div className="col-lg-3 col-12">
         <div> <h5 style={{ color: "white", marginBottom:"24px" }}>Find Us</h5></div>
          <a href="/" class="fa fa-linkedin" style={{ textDecoration:"none"}}></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
