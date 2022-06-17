import React from "react";
import OwlDemo from "./Owldemo1";
import img2 from "./pro.png";
import "./Home.css";
import img1 from "./bg G.png";
import img3 from "./ppro.png"
import img4 from './values-background.png'
function Home() {
  return (
    <div>
      <div className="container-fluid position-relative posr">
        {" "}
        <img src={img1} class="img img1" alt="..." />
        <div className="position-absolute top-50  usi ">
          <h3 className="text-white fw-bold  med">
            We Have The Right Technology Solutions. <br />
            <div className="position-absolute   usii ">
              <h3 className="text-white fw-bold  med"> We Are Botaye</h3>
            </div>
          </h3>
        </div>
      </div>

      <div> </div>

      <div className="container ">
        <h3 className="fw-bold text-center we">
          WE BUILD DIGITAL PRODUCTS.
          <br />
          WE BUILD AWESOME EXPERIENCES.
        </h3>
        <p className="bot">
          Botaye is a technology solution provider company situatedin Addis
          Ababa, Ethiopia. Services include web development,advanced digital
          marketing, mobile development, and custom software development..
        </p>
        <div>
          <h3 className="text-center fw-semibold our"> Our Servies</h3>
        </div>
      </div>

      <div className="container-fluid position-relative bg">
        <div className="container  ">
          <OwlDemo />
        </div>
      </div>
      <div>
        <h3 className="text-center fw-semibold "style={{marginTop:"64px",
      marginBottom:"64px"}}> Who We Are</h3>
      </div>
      <div className="container">
        <div className="row" style={{ alignItems: "center" }}>
          <div className=" col-lg-4 col-12 text-center text-lg-start">
            <img src={img2} />
          </div>

          <div className="col-lg-8 col-12">
            <p>
              Botaye Data Science is a technology solution provider company
              situated in Addis Ababa, Ethiopia. Botaye is a reliable Website
              Design & Development, Software Development. We provide custom web,
              software, multi-platform solutions for Enterprise and Startup
              companies in Ethiopia.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center fw-semibold "style={{marginTop:"64px",
      marginBottom:"64px"}}> Our Values</h3>
      </div>

      <div className="container">
        <div className="row" style={{ alignItems: "center" }}>
         

          <div className="col-lg-8 col-12 order-2 order-lg-1">
            <p>
            At Botaye Data Science, our workflow inhibits transparency in its core. We deeply value the relation we form with our clients, and believe that clear communication, in every stage of the development process, is key for a successful partnership. Hence making sure that the output of our work is aligned with the desired solution.
            </p>
          </div>
          <div className=" col-lg-4 col-12 text-center text-lg-end order-1 order-lg-2">
            <img src={img3} />
          </div>
        </div>

         
      </div>
      <div className="container-fluid position-relative ">
        <img style={{width:"100%"}} src={img4}/>
      <div className="row">
        <div className="col-lg-3 col-12">
        <div class="card card-content">
        <img src={"..."} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Quality 
Product 
Delivery</h5>
    
   
  </div>
</div>
        </div>
        <div className="col-lg-3 col-12">
        <div class="card card-content">
        <img src={"..."} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Quality 
Product 
Delivery</h5>
    
   
  </div>
</div>
        </div>
        <div className="col-lg-3 col-12">
        <div class="card card-content">
        <img src={"..."} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Quality 
Product 
Delivery</h5>
    
   
  </div>
</div>
        </div>
        <div className="col-lg-3 col-12">
        <div class="card card-content" >
        <img src={"..."} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Quality 
Product 
Delivery</h5>
    
   
  </div>
</div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Home;
