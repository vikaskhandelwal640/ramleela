import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/HeroSection/Hero'
import HeroImg from"../../assets/livingroom.jpg"
const About = () => {
  return (
    <div>
        <Navbar/>
        <Hero cName="About" HeroImg={HeroImg}/>
    </div>
  )
}

export default About