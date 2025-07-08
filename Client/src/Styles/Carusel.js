import styled from "styled-components";
import BackOne from "../assets/backgroundOne.svg";
import BackTwo from "../assets/backgroundTwo.svg";
import BackThree from "../assets/BackgroundThree.svg";

export const SlickArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgba(253, 252, 252, 0.39);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 4%;
  top: 50%;
  z-index: 2;
  cursor: pointer;
`;

export const SlickArrowLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgba(253, 252, 252, 0.39);
  border: none; 
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: 4%;
  top: 50%;
  z-index: 2;
  cursor: pointer;
`;

export const BgDivsOne = styled.div`
  height: 500px;
  width: 100%;
  background-image: url("${BackOne}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const BgDivsTwo = styled.div`
  height: 500px;
  width: 100%;
  background-image: url("${BackTwo}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const BgDivsThree = styled.div`
  height: 500px;
  width: 100%;
  background-image: url("${BackThree}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
