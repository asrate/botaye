import React from "react";
import OwlDemo from "./Owldemo1";
import img2 from "./pro.png";
import "./Home.css";
import img1 from "./bg G.png";
import img3 from "./ppro.png";
import img4 from "./cho.png";
import img5 from "./honesty.png";
import img6 from "./ontime.png";
import img7 from "./quality.png";
import img8 from "./tangible.png";
import Project from "./../Project/project";
import Stack from "../Stacks/Stack";

function Home() {
  return (
    <div>
      <div
        className="container-fluid position-relative posr"
        style={{ padding: "0" }}
      >
        {" "}
        <img src={img1} class="img img1" alt="..." />
        <div className="position-absolute top-50  usi ">
          <h3 className="text-white fw-bold  med">
            We Have The Right Technology Solutions. <br />
            <div className="position-absolute   usii ">
              <h3 className="text-white fw-bold  med">
                {" "}
                We Are <span style={{ color: "yellow" }}>Botaye</span>{" "}
              </h3>
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

      <div
        className="container-fluid position-relative bg"
        style={{ padding: "0" }}
      >
        <div className="container  ">
          <OwlDemo />
        </div>
      </div>
      <div>
        <h3
          className="text-center fw-semibold "
          style={{ marginTop: "64px", marginBottom: "64px" }}
        >
          {" "}
          Who We Are
        </h3>
      </div>
      <div className="container">
        <div className="row" style={{ alignItems: "center" }}>
          <div
            data-aos="fade-right"
            className="   col-lg-4 col-12 text-center text-lg-start"
          >
            <img src={img2} />
          </div>

          <div
            data-aos="fade-left"
            className="  aos-init aos-animate col-lg-8 col-12"
          >
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
        <h3
          className="text-center fw-semibold "
          style={{ marginTop: "64px", marginBottom: "64px" }}
        >
          {" "}
          Our Values
        </h3>
      </div>

      <div className="container">
        <div
          className="row"
          style={{ alignItems: "center", marginBottom: "144px" }}
        >
          <div
            data-aos="fade-right"
            className="col-lg-8 col-12 order-2 order-lg-1"
          >
            <p>
              At Botaye Data Science, our workflow inhibits transparency in its
              core. We deeply value the relation we form with our clients, and
              believe that clear communication, in every stage of the
              development process, is key for a successful partnership. Hence
              making sure that the output of our work is aligned with the
              desired solution.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className=" col-lg-4 col-12 text-center text-lg-end order-1 order-lg-2"
          >
            <img src={img3} />
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ padding: "0" }}>
        {/* <img style={{width:"100%", height:"355px"}} src={img4}/> */}
        <div
          className="row "
          style={{ padding: "80px", background: "black", maxWidth: "100%" }}
        >
          <div className="col-lg-3 col-12 col-md-6 col-sm-6">
            <div class="card card-content" data-aos="flip-right">
              <img src={img5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Quality Product Delivery</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 col-md-6 col-sm-6">
            <div class="card card-content" data-aos="flip-right">
              <img src={img6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Transparency And Honesty</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 col-md-6 col-sm-6">
            <div class="card card-content" data-aos="flip-right">
              <img src={img7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">On-Time Delivery</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 col-md-6 col-sm-6">
            <div class="card card-content" data-aos="flip-right">
              <img src={img8} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Tangible Solution</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h3
            className="text-center fw-semibold "
            style={{ marginTop: "144px", marginBottom: "64px" }}
          >
            {" "}
            Our Projects
          </h3>
        </div>
        <div>
          
          {/* <p style={{ marginBottom: "5rem" }}>
            Our stacks include JavaScript, React, Nextjs, Bootstrap, Laravel,
            Nodejs, TypeScript, Python, Java, Swift, WordPress, and more
          </p> */}
        </div>{" "}
      </div>

      <div
        className="container-fluid "
        style={{ background: "#D9D9D9", padding: "72px 8px 8px" }}
      >
        <div className="container">
          <div>
            <Project />
           
          </div>
       
        </div>
      </div>
         <div> <Stack/></div>
      <div className="container">
        <h3
          className="text-center fw-semibold "
          style={{ marginTop: "144px", marginBottom: "144px" }}
        >
          {" "}
          Why Choose US
        </h3>
      </div>
      <div className="container-fluid" style={{ padding: "0" }}>
        <img
          src={img4}
          alt=""
          style={{ width: "100%", marginBottom: "144px" }}
        />
      </div>
      <h5
        style={{ textAlign: "center", marginBottom: "144px" }}
        className="fw-bold"
      >
        {" "}
        let's collaborate on{" "}
        <span style={{ color: " #F0DC0D" }}>your project</span>
      </h5>
    </div>
  );
}

export default Home;
