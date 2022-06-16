import {BrowserRouter as Router, Route, Routes,  Redirect, Switch} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Owldemo1 from './Components/owldemo'  
import OwlDemo from './Components/Owldemo1' 
// import Footer from "./component/Footer/Footer";
// import About from './component/About/About';
// import News from './component/News/News';
// import Companies from './component/Companies/companies'
function App() {
  return (
    <div >
     
 <Router>
      <Navbar/>
        <Owldemo1/>
       <OwlDemo/>
     <main>
       
      <Routes>n
       <Route path ='/'  element={<Home/>} />
         
     
       {/* <Route path='about'  element={<About/>} />

       <Route path='news'  element={<News/>} />
       <Route path='companies'  element={<Companies/>} /> */}
      
      </Routes>
       
     </main>
     {/* <Footer/> */}
   </Router>
    
    </div>
  );
}

export default App;
