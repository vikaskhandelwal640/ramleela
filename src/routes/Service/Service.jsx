import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/HeroSection/Hero'
import HeroImg from"../../assets/Outsidearea.jpg"
const Service = () => {
  return (
    <div>
         <Navbar/>
        <Hero cName="Service" HeroImg={HeroImg}/>
    </div>
  )
}

export default Service