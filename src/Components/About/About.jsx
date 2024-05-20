import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import Aboutimg from '../../assets/About.png';
import PlayIcon from '../../assets/Playicon.svg';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={Aboutimg} alt="img" className='about-img' />
        <img 
          src={PlayIcon} 
          alt="icons" 
          className='play-icon' 
          onClick={() => setPlayState(true)} 
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere, corporis voluptatem aliquam molestiae quod!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptate ab cupiditate optio! Suscipit nulla sed reiciendis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, distinctio rerum vitae doloremque illum ex beatae inventore tempora?</p>
      </div>
    </div>
  );
};

About.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default About;
