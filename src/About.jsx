import React from 'react';
import './App.css';
import logo from './imgs/logo192.png';

const About = () => {
    return (
        <div className='about-container'>
            <p className='about-p'>This app was created as an exercise in React course at Business College Helsinki Full Stack Developer program. The aim was to learn how to handle events and states, work with components and React Router. </p>

            <img className='logo-img' src={logo} alt="logo-img" />
        </div>
    );
};

export default About;