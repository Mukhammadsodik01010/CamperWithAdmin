import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CampingData } from "../MockData/CampingPlaceData";
import Navbarcomponent from "./Navbar";
import DetailCamping1 from "../assets/CampingPlace1.svg";
import DetailCamping2 from "../assets/CampingPlace2.svg";
import DetailCamping3 from "../assets/CampingPlace3.svg";
import HomeIcon from "../assets/home.svg";
import ClockIcon from "../assets/clock.svg";
import LocationIcon from "../assets/location.svg";
import PhoneIcon from "../assets/phone.svg";
import Map15 from '../assets/map15.svg'

import {
    AllDetailsDiv,
  AllInTwo,
  AllInTwoMain,
  CampingDetailImg,
  CampingDetailImg2,
  CampingDetailImg3,
  CampingDetailImg4,
  CampingDetailMain,
  CampingDetails,
  DescriptionH4,
  DescriptionP,
  LocationButton,
  LocationDiv,
  LocationH2,
  LocationName,
  MapImg,
} from "../Styles/CampingDetailedPage";
import FooterComponent from "../Footer";

const CampingDetailedPage = () => {
  const { id } = useParams();
  const [campingData, setCampingData] = useState(null);

  useEffect(() => {
    const Data = CampingData.find((car) => car.id === id);
    setCampingData(Data);
  }, [id]);

  if (!campingData) {
    return <div>Loading or not found...</div>;
  }

  return (
    <>
      <Navbarcomponent />
      <CampingDetailMain>
        <CampingDetailImg src={DetailCamping1} alt="DetailCamping1" />
        <CampingDetailImg4 src={DetailCamping2} alt="DetailCamping1" />
        <CampingDetailImg3 src={DetailCamping3} alt="DetailCamping1" />
        <CampingDetailImg2 src={DetailCamping1} alt="DetailCamping1" />
        <CampingDetailImg2 src={DetailCamping2} alt="DetailCamping1" />
        <CampingDetailImg2 src={DetailCamping3} alt="DetailCamping1" />
      </CampingDetailMain>
      <CampingDetails>
        <LocationName>{campingData.name}</LocationName>
        <LocationDiv>
          <LocationH2>Location</LocationH2>
          <LocationButton>Copy Map</LocationButton>
        </LocationDiv>
        <hr />
        <AllDetailsDiv>
          <AllInTwoMain>
            <AllInTwo>
              <img src={LocationIcon} alt="LocationIcon" />
              <p>{campingData.location}</p>
            </AllInTwo>
            <AllInTwo>
              <img src={PhoneIcon} alt="PhoneIcon" />
              <p>{campingData.phone}</p>
            </AllInTwo>
          </AllInTwoMain>
          <AllInTwoMain>
            <AllInTwo>
              <img src={ClockIcon} alt="ClockIcon" />
              <p>{campingData.workingHours}</p>
            </AllInTwo>
            <AllInTwo>
              <img src={HomeIcon} alt="HomeIcon" />
              <p>{campingData.website}</p>
            </AllInTwo>
          </AllInTwoMain>
        </AllDetailsDiv>
        <DescriptionH4>Description</DescriptionH4>
        <DescriptionP>{campingData.description}</DescriptionP>

        <MapImg src={Map15} alt="Map" />
      </CampingDetails>

      <FooterComponent/>
    </>
  );
};

export default CampingDetailedPage;
