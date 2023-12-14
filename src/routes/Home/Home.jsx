import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/HeroSection/Hero'
import HeroImg from"../../assets/HeroImg.jpg"
import SearchBox from '../../Components/Searchbox/SearchBox'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero cName="Home" HeroImg={HeroImg}/>
        <SearchBox/>
    </div>
  )
}

export default Home