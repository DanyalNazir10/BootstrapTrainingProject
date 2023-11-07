import React, { useState } from "react";
import Slider from "react-slick";

export default function SimpleSlider({
  isVertical = true,
  Slider_images,
  style,
}) {
  const [selectedImage, setSelectedImage] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: isVertical,
    arrows: true,
    verticalSwiping: true,
  };

  const onThumbnailClick = (index) => {
    setSelectedImage(index);

    const mainImage = document.querySelector(".slider-main-img");
    if (mainImage) {
      mainImage.src = Slider_images[index];
    }
  };

  return (
    <div>
      <Slider style={{ ...style }} {...settings}>
        {Slider_images.map((image, index) => {
          return (
            <div key={index}>
              <img
                onClick={() => onThumbnailClick(index)}
                className="text-center"
                width="80%"
                height="100px"
                src={image}
                alt={index}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
