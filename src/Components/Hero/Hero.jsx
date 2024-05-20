import React from 'react'
import './Hero.css'
import rightButton from '../../assets/rightButton.svg'

const Hero = () => { 
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sequi blanditiis, mollitia maiores minima voluptatum laudantium maxime consequatur facilis. Soluta.</p>
        <button className='btn'>Explore more <img src={rightButton} alt="btn" /></button>
      </div>
      
    </div>
  )
}

export default Hero
