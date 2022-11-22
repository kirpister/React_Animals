import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Birds from './Birds.jsx';
import './App.css';
import About from './About.jsx';
import Home from './Home.jsx';
import Animals from './Animals.jsx';



class App extends Component {
  
render() {

  
  return (
    <BrowserRouter>
  <div>
    
    <nav>
      <ul>
       <li><Link to='/'>HOME</Link></li>
       <li><Link to='/animals'>ANIMALS</Link></li>
       <li><Link to='/birds'>BIRDS</Link></li>
       <li><Link to='/about'>ABOUT</Link></li>
      </ul>
    </nav>
   
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/birds" element={<Birds />} /> 
      <Route path="/about" element={<About />} />
    </Routes>
    
  </div> 
  </BrowserRouter>
)
};
}

export default App;






