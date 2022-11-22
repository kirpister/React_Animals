import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
       
    <nav>
      <ul>
       <li><Link to='/'>HOME</Link></li>
       <li><Link to='/animals'>ANIMALS</Link></li>
       <li><Link to='/birds'>BIRDS</Link></li>
       <li><Link to='/about'>ABOUT</Link></li>
      </ul>
    </nav>
        
    )
};

export default Nav;