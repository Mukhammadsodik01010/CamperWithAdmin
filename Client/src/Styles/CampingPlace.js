import styled from "styled-components";
import CampingbgImage from "../assets/CampingBg.svg";

export const CampingBgDiv = styled.div`
  width: 100%;
  height: 450px;
  background-image: url("${CampingbgImage}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const CampingBgh3 = styled.h3`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;
export const CampingBgh1 = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 40px;
`;

export const CampingPlacesMain = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  gap: 20px;
  row-gap: 50px;
  justify-content: space-evenly;
  padding: 80px 70px;
  @media only screen and (max-width: 1370px) {
    grid-template-areas: "a a";
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 980px) {
    grid-template-areas: "a";
    padding: 80px 40px;
  }
  @media only screen and (max-width: 600px) {
    padding: 80px 20px;
  }
`;

export const ChildsMainDiv = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  gap: 30px;
  justify-content: space-evenly;
  padding: 0 70px;
  margin-top: 50px;
  @media only screen and (max-width: 850px) {
    grid-template-areas: "a a";
  }
  @media only screen and (max-width: 550px) {
    grid-template-areas: "a";
  }
`;
