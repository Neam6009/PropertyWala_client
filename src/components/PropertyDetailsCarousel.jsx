import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const SimpleSliderPd = ({ propertyImage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {propertyImage.map((img) => (
          <>
            <div>
              <img
                style={{ borderRadius: "0.5rem", height: "60rem", width: "100%" }}
                src={img}
                alt="propertyImage"
              />
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSliderPd;
