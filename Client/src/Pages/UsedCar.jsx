import React from "react";
import Navbarcomponent from "./Navbar";
import FooterComponent from "../Footer";
import {
  UsedCarBgDiv,
  UsedCarBgh1,
  UsedCarBgh2,
  UsedCarBgh3,
} from "../Styles/UsedCar";
import USectionComp from "./USection";

const UsedCarComponent = () => {
  return (
    <>
      <Navbarcomponent />
      <UsedCarBgDiv>
        <UsedCarBgh3>Home / Used Cars</UsedCarBgh3>
        <UsedCarBgh2>Our ranges</UsedCarBgh2>
        <UsedCarBgh1>Used Cars</UsedCarBgh1>
      </UsedCarBgDiv>
      <USectionComp />
      <FooterComponent />
    </>
  );
};

export default UsedCarComponent;
