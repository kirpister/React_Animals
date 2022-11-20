import React from 'react';
import catimg from './imgs/cat.jpg';
import birdimg from './imgs/bird.jpg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Home = () => {
    return (
    
        
        <div>
            
            <div className='images'>
            <div className='animal-link'><Link to='/animals'>ANIMALS</Link></div>
            <img className='cat-img' src={catimg} alt="cat-img" />

            <div className='bird-link'><Link to='./birds'>BIRDS</Link></div>
            <img className='bird-img' src={birdimg} alt="bird-img" />
            </div>
        </div>
       
    );
};

export default Home;