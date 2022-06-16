import React from 'react'


import './Home.css'
import img1 from './bg G.png'
function Home () {
  return (
    <div>
    
     <div className="container-fluid position-relative posr"> <img src={img1} class="img img1" alt="..."/> 
        <div className="position-absolute top-50  usi ">
       
          <h3 className='text-white fw-bold  med'>
          We Have The Right Technology Solutions.  <br/>
          <div className="position-absolute   usii ">
          <h3 className='text-white fw-bold  med'> We Are Botaye</h3> 
        
         </div>
            

          </h3>

</div>
        </div>

<div> </div>
          
      



        
        <div className='container '>
          <h3 className='fw-bold text-center we'>WE BUILD DIGITAL PRODUCTS.<br/>
WE BUILD AWESOME EXPERIENCES.</h3>
<p className='bot'>Botaye is a technology solution provider company situatedin Addis Ababa, Ethiopia. Services include web development,advanced digital marketing, mobile development, and custom software development..</p>
   <div>
    <h3 className='text-center fw-semibold our'> Our Servies</h3>
   </div></div>

   <div className='container-fluid position-relative bg'>

  <div className='container  '>
   <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner  position-absolute bg1">
    <div class="carousel-item active">
      <div className='cards-wrapper  '>
<div class="card " >
<div className='image-wrapper'>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a></div>
  </div>
</div>
     
      <div class="card" >
<div className='image-wrapper'>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a></div>
  </div>
</div>  
    
        <div class="card" >
<div className='image-wrapper'>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a></div>
  </div>
</div>
      </div>  
    </div>

    <div class="carousel-item ">
      <div className='cards-wrapper'>
<div class="card" >
<div className='image-wrapper'>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a></div>
  </div>
</div>
     
      <div class="card" >
<div className='image-wrapper'>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a></div>
  </div>
</div>  
    
        <div class="card" >
<div className='image-wrapper'>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a></div>
  </div>
</div>
      </div>  
    </div>




  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

 </div>
 </div>  
        
    </div>
  )
}

export default Home