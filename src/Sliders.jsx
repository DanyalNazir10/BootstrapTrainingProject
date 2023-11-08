import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider({isVertical =true, Slider_images, style}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: isVertical,
    arrows: true,
    verticalSwiping: true,
      
  };
console.log('style',style)
  return (
      <Slider style={{...style}} {...settings}>
       {Slider_images.map(image => {
        return(
            <div>
            <img className='text-center'  width="80%" height="100px" src={image} />
        </div>
        )
       })}
      </Slider>   
  );
};
