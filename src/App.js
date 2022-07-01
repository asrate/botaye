import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes,  Redirect, Switch} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
// import Owldemo1 from './Components/owldemo'  
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Components/Footer/Footer";
// import About from './component/About/About';
// import News from './component/News/News';
// import Companies from './component/Companies/companies'
function App() {
  AOS.init({
    delay: 1000, // values from 0 to 3000, with step 50ms
  duration: 800,
  });
  


  return (
    <div >
     
 <Router>
      <Navbar/>
        {/* <Owldemo1/> */}
      
     <main>
       
      <Routes>n
       <Route path ='/'  element={<Home/>} />
         
     
       {/* <Route path='about'  element={<About/>} />

       <Route path='news'  element={<News/>} />
       <Route path='companies'  element={<Companies/>} /> */}
      
      </Routes>
       
     </main>
     <Footer/>
   </Router>
    
    </div>
  );
}

export default App;
