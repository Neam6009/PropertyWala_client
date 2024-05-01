import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SimpleSlider = ({ blogs }) => {
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
        {blogs.map((blog) => (
          <>
            <div
              style={{
                paddingLeft: "26rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <img src={blog.blogImage} alt="img2" style={{ width: "100%" }} />
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                <h3>{blog.title}</h3>
              </a>
              <p>
                <FontAwesomeIcon icon={faUser} /> {blog.blogAuthor}
              </p>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
