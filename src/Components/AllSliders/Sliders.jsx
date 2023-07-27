import React from 'react'
import './Slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProductContext } from '../../AppContext/Context'
import { Link } from 'react-router-dom';
const Sliders = () => {
  const { isLoading, products, featureProducts1 } = useProductContext();
  console.log(featureProducts1)

  if (isLoading) {
    return <div className="loadersParent"><span className='loader'></span></div>  
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className='sliderMain'>
        <div className="header-slider">
          <h3> Best of Electoronics </h3>
          <Link className='viewdata' to="/AllProducts">View All</Link>
        </div>
        <hr className='line' />
        <Slider {...settings} >
          {
            products.map((item) => {
              return (
                <div className='inner-slides'>
                  <img src={item.image} alt="" />
                  <div className='inner-slides-content'>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>

                </div>
              )
            })
          }
        </Slider>
      </div>
      <div className='sliderMain1 sliderMain'>
        <div className="header-slider">
          <h3> Men's and Women's Clothing </h3>
          <Link className='viewdata' to="/Clothing">View All</Link>
        </div>
        <hr className='line' />
        <Slider {...settings} >
          {
            featureProducts1.map((item) => {
              return (
                <div className='inner-slides'>
                  <img src={item.image} alt="" />
                  <div className='inner-slides-content'>
                    <p>{item.title}</p>
                    <p>{item.price}$</p>
                  </div>

                </div>
              )
            })
          }
        </Slider>
      </div>
      <div className='sliderMain'>
        <div className="header-slider">
          <h3> Best of Electoronics </h3>
          <Link className='viewdata' to="/AllProducts">View All</Link>
        </div>
        <hr className='line' />
        <Slider {...settings} >
          {
            products.map((item) => {
              return (
                <div className='inner-slides'>
                  <img src={item.image} alt="" />
                  <div className='inner-slides-content'>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>

                </div>
              )
            })
          }
        </Slider>
      </div>
      <div className='sliderMain1 sliderMain'>
        <div className="header-slider">
          <h3> Men's and Women's Clothing </h3>
          <Link className='viewdata' to="/Clothing">View All</Link>
        </div>
        <hr className='line' />
        <Slider {...settings} >
          {
            featureProducts1.map((item) => {
              return (
                <div className='inner-slides'>
                  <img src={item.image} alt="" />
                  <div className='inner-slides-content'>
                    <p>{item.title}</p>
                    <p>{item.price}$</p>
                  </div>

                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  
  )
}

export default Sliders




