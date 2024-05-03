import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
import HeroContent from '../HeroContent/HeroContent'

function Hero() {
  return (
    <div className="hero">
        <Navbar/>
        <HeroContent/>
    </div>
  )
}

export default Hero