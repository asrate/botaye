import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./bg G.png";
import img9 from "./website.png";
import img10 from "./mobile.png";
import img11 from "./server.png";
import img12 from "./software.png";
import "./owl.css";

export class Owldemo1 extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  render() {
    return (
      <div>
        {/* <div class='container-fluid' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="col-sm-12 btn btn-info">      
           Owl Carousel In React Application   
           </div>      
           </div>  
       </div>   */}
        <div className="container-fluid position-relative bg"  >
          <div class="container position-absolute bg1"  >
            <OwlCarousel
              items={1}
              className="owl-theme "
              loop
              nav={false}
              margin={8}
              autoplay={true}
              responsiveClass={true}
              responsive={this.state.responsive}
            >
              <div className="card-wrapper position-relative" >
                <div class="card card-service" >
                  <img src={img9} class="card-img-top" alt="..." />
                  <div class="card-body card-color">
                    <h5 class="card-title">Website Design & Development </h5>
                    <p class="card-text">
                      {" "}
                      Designing and creating custom built websites, web portals
                      and web applications
                    </p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>

              <div className="card-wrapper position-relative">
                <div class="card card-service ">
                  <img src={img10} class="card-img-top" alt="..." />
                  <div class="card-body  card-color">
                    <h5 class="card-title">Mobile App Development</h5>
                    <p class="card-text">
                      {" "}
                      Design & Develop Custom Software Solutions that empower
                      businesses to stay ahead of their competition.
                    </p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>

              <div className="card-wrapper position-relative">
                <div class="card card-service" >
                  <img src={img11} class="card-img-top" alt="..." />
                  <div class="card-body card-color">
                    <h5 class="card-title">Server Hosting and Configuration</h5>
                    <p class="card-text">
                      High quality affordable software and web hosting services
                      for companies of all sizes. Host your website or software
                      on a reliable server.
                    </p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>

              <div className="card-wrapper position-relative">
                <div class="card card-service">
                  <img src={img12} class="card-img-top" alt="..." />
                  <div class="card-body card-color">
                    <h5 class="card-title">
                      Software Development & Implementation
                    </h5>
                    <p class="card-text" id="who-we-are">
                      Design & Develop Custom Software Solutions that empower
                      businesses to stay ahead of their competition.
                    </p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
