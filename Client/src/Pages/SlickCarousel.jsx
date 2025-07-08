import React, { Component } from "react";
import Slider from "react-slick";
import LeftArrowImg from "../assets/RightIcon.svg";
import RightArrowImg from "../assets/LeftIcon.svg";
import {
  BgDivsOne,
  BgDivsThree,
  BgDivsTwo,
  SlickArrow,
  SlickArrowLeft,
} from "../Styles/Carusel";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <SlickArrow onClick={onClick}>
      <img src={RightArrowImg} alt="Arrow" />
    </SlickArrow>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <SlickArrowLeft onClick={onClick}>
      <img src={LeftArrowImg} alt="Arrow" />
    </SlickArrowLeft>
  );
}

function MainCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <BgDivsOne>{/* <h3>1</h3> */}</BgDivsOne>
        <BgDivsTwo>{/* <h3>2</h3> */}</BgDivsTwo>
        <BgDivsThree>{/* <h3>3</h3> */}</BgDivsThree>
      </Slider>
    </div>
  );
}

export default MainCarousel;
