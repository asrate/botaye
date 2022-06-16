 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import img1 from './bg G.png' 
import './owl.css';  
export class Owldemo1 extends Component {  
        render()  
        {  
          return (  
            <div>  
          <div class='container-fluid' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="col-sm-12 btn btn-info">      
           Owl Carousel In React Application   
           </div>      
           </div>  
       </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} autoplay={true} >  
           <div><img  className="img" src= {img1}/></div>  
           <div ><img  className="img" src= {img1}/></div>  
           <div><img  className="img" src= {img1}/></div>  
           <div><img  className="img" src= {img1}/></div>  
           <div><img className="img" src= {img1}/></div>  
           <div><img className="img" src= {img1}/></div>  
           <div><img className="img" src= {img1}/></div>  
      </OwlCarousel>  
      </div>  
  
      </div>  
          )  
        }  
      }  
        
  
export default Owldemo1  