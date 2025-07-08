import styled from "styled-components";
import UsedCarImage from '../assets/UsedCarImg.jpg'

export const UsedCarBgDiv = styled.div`
width: 100%;
height: 450px;
background-image: url("${UsedCarImage}");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
`
export const UsedCarBgh3 =styled.h3`
color: white;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
`
export const UsedCarBgh2 =styled.h2`
color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;
margin-top: 13px;
`
export const UsedCarBgh1 =styled.h1`
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;
`