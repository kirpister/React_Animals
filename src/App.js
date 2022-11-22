import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Birds from './Birds.jsx';
import Nav from './Nav.jsx';
import './App.css';
import About from './About.jsx';
import Home from './Home.jsx';
import Animals from './Animals.jsx';
import NotFound from './NotFound.js';

class App extends Component {
  
render() {

  return (
  <BrowserRouter>
    
    <Nav />
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/birds" element={<Birds />} /> 
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
    
  </BrowserRouter>
)}
};

export default App;






