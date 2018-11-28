import React from "react";
import Slider from "react-slick";

import slide_one from "../../resources/images/jose-gonzalez-greenBg.jpg";
import slide_two from "../../resources/images/jose-playing.jpg";
import slide_three from "../../resources/images/jose-gonzalez-playing2.jpg";
const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };
  return (
    <div className="carrousel_wrapper">
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};
export default Carrousel;
