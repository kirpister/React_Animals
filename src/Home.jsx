import React from 'react';
import catimg from './imgs/cat.jpg';
import birdimg from './imgs/bird.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
    
        <div className='images'>
            <Link to='/animals'><img className='cat-img' src={catimg} alt="cat-img" /></Link>
            <Link to='/birds'><img className='bird-img' src={birdimg} alt="bird-img" /></Link>
        </div>
    );
};

export default Home;