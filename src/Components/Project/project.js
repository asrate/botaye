import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import img15 from "./bg G.png";
import ale from "./ale.png";
import n4ed from "./n4ed.png";
import siltena from "./siltena.png";
import sira from "./sirra.png";
import tiru from "./tiru.png";
// import "./owl.css";

export class Project extends Component {
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
        <div className="container-fluid  ">
          <div class="container ">
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
              <div className=" ">
                <div class="card " >
                  <img src={ale} class="" alt="..." />
                  <div class="card-body text-end ">
                   
                  <a  href="https://www.ale-des.com/"  target="_blank" class="btn btn-white text-dark" >Visit Site</a>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div class="card  " >
                  <img src={n4ed} class="" alt="..." />
                  <div class="card-body text-end ">
                   
                  <a  href="https://campaign.n4ed.org/"  target="_blank" class="btn btn-white text-dark" >Visit Site</a>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div class="card" >
                  <img src={siltena} class="" alt="..." />
                  <div class="card-body text-end ">
                    
                  <a  href="https://siltena.com/"  target="_blank" class="btn btn-white text-dark" >Visit Site</a>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div class="card ">
                  <img src={sira} class="" alt="..." />
                  <div class="card-body text-end ">
                    
                  <a  href="https://sirabota.com/"  target="_blank" class="btn btn-white text-dark" >Visit Site</a>
                  </div>
                </div>
              </div>
               
              <div className=" ">
                <div class="card ">
                  <img src={tiru} class="" alt="..." />
                  <div class="card-body text-end ">
                    
                    <a href="https://tiruhakim.com/"  target="_blank" class="btn btn-white text-dark ">Vist Site</a>
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

export default Project;
