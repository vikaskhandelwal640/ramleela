import React from 'react'

import Hero from '../../Components/HeroSection/Hero'
import HeroImg from"../../assets/HeroImg.jpg"
import SearchBox from '../../Components/Searchbox/SearchBox'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        
        <Hero cName="Home" HeroImg={HeroImg}/>
        <SearchBox/>
    </div>
  )
}

export default Home