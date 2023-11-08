import Slider from "react-slick";
import {sliderSettings} from "../../../../src/utils/sliderSettings";

export default function simpleSlider ({
  isVertical = true,
  sliderImages,
  style,
}) {

  const onThumbnailClick = (index) => {
    const mainImage = document.querySelector(".slider-main-img");
    if (mainImage) {
      mainImage.src = sliderImages[index];
    }
  };

  return (
    <div>
      <Slider style={{ ...style }} {...{...sliderSettings, vertical: isVertical}}>
        {sliderImages.map((image, index) => {
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
