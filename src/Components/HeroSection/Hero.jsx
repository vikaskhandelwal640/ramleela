import React from 'react'
import HeroImg from"../../assets/HeroImg.jpg"
import "./HeroStyles.css"
const Hero = (props) => {
  return (
    <div>
        <div className={props.cName}>
          <div className="ImgConatiner">

            <img src={props.HeroImg} alt="heroImg"className='HeroImg' />
            </div>  
        </div>
    </div>
  )
}

export default Hero
