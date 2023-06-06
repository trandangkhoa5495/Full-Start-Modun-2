import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Sliceder.css";
import { useSelector } from "react-redux";

const Sliceder = () => {
  const productLish = useSelector((state) => state.Product);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        {productLish.map((item) => (
          <div className="slice">
            <img src={item.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliceder;
