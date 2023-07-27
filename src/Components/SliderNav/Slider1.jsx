import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {img1,img2,img3,img4,img5} from './Import'
import './slider1.css'
import '../../index.css'
const Slider1 = () => {
 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='main-slider section__padding'>
          
          <Slider {...settings}>
            <div className='slider-items'>
             <img src={img1} alt="" />
            </div>
            <div className='slider-items'>
            <img src={img2} alt="" />

            </div>
            <div className='slider-items'>
            <img src={img3} alt="" />

            </div>
            <div className='slider-items'>
            <img src={img4} alt="" />

            </div>
            <div className='slider-items'>
            <img src={img5} alt="" />

            </div>
           
          </Slider>
             
        </div>
      );
}

export default Slider1
