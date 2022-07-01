
import React, {useState, useEffect} from 'react'
import { NavLink,Link } from 'react-router-dom';
import './Navbar.css';
import img1 from './botaye.png'

function Navbar(){

  const [activeNav, setActiveNav] = useState('')
  console.log(activeNav)
  // running on mount
  useEffect(() => {
    const onScroll = () => {
      console.log(window.scrollY)
      const ourservise=window.scrollY >=712 && window.scrollY <1272 ;  
      const whoWeAreScroll = window.scrollY >=1272 && window.scrollY <1690 ;  
      const ourValues = window.scrollY >=1690 && window.scrollY <2540 ;  
      const ourproject = window.scrollY >=2540 && window.scrollY <3240 ;  
      const whychooseus = window.scrollY >=3920 && window.scrollY <4728 ;  
      if (whoWeAreScroll) {
        setActiveNav('whoWeAre')
      }
      else if (ourValues) {
        setActiveNav('ourValues')
      }
      else if (ourservise){
        setActiveNav("ourService")
      }
      else if (ourproject){
        setActiveNav("ourProject")
      }
      else if (whychooseus){
        setActiveNav("whyChooseUs")
      }
      else {
        setActiveNav('')
      }
    }
  
  // setting the event handler from web API
  document.addEventListener("scroll", onScroll)
  
  // cleaning up from the web API
   return () => {
     document.removeEventListener("scroll", onScroll)
    }
  }, [activeNav, setActiveNav])
  
      return(
          <div >
            <div class="fixed-top">
         <nav  className=" navbar navbar-expand-lg center topnav  navbar-white bg-white">
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
          <a className={`nav-link ${activeNav === 'ourService' && 'active'} `}  aria-current="page" href ='#ourservies' >Our Service</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeNav === 'whoWeAre' && 'active'} `}  href='#who-we-are' element='true'>Who Are We</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeNav === 'ourValues' && 'active'} `}  href='#ourvalues' element='true'>Our Values</a>
        </li> 
        <li className="nav-item">
          <a className={`nav-link ${activeNav === 'ourProject' && 'active'} `}  href='#ourproject' element='true'>Our Project</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeNav === 'whyChooseUs' && 'active'} `}  href='#whychooseus' element='true'>Why Choose Us</a>
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