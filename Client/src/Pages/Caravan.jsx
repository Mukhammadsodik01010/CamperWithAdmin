import React from "react";
import Navbarcomponent from "./Navbar";
import FooterComponent from "../Footer";
import {
  CaravanBgDiv,
  CaravanBgh1,
  CaravanBgh2,
  CaravanBgh3,
} from "../Styles/Caravan";
import CSectionComp from "./CSection";

const CaravanComponent = () => {
  return (
    <>
      <Navbarcomponent />
      <CaravanBgDiv>
        <CaravanBgh3>Home / Caravan</CaravanBgh3>
        <CaravanBgh2>Our ranges</CaravanBgh2>
        <CaravanBgh1>Caravan</CaravanBgh1>
      </CaravanBgDiv>
      <CSectionComp />
      <FooterComponent />
    </>
  );
};

export default CaravanComponent;
