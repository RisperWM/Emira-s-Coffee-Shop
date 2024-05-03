import React from 'react'
import './HeroContent.css'

function HeroContent() {
  return (
    <div className="hero-content">
        <p className='welcome'>Welcome!</p>
        <p className='intro'>We serve the richest coffee in the city!</p>
        <button className="order">Order Now</button>
    </div>
  )
}

export default HeroContent