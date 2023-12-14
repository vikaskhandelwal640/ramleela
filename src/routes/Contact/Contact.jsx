import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/HeroSection/Hero'
import HeroImg from"../../assets/bedroom.jpg"
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Hero cName="Contact" HeroImg={HeroImg}/>
    </div>
  )
}

export default Contact