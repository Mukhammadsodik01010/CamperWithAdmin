import styled from "styled-components";

export const RecommendDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  @media only screen and (max-width: 750px) {
    justify-content: start;
    padding-left: 70px;
  }
`;
export const RecommendUnderline = styled.div`
  border-bottom: 4px solid #ff7a00;
`;
export const RecommendH1 = styled.h1`
  color: var(--text, #373737);
  text-align: center;
  font-family: Gilroy;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px;
`;

export const MultiAsosiyDiv = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 5%;
`

export const MultiMainDiv = styled.div`
width: 90%;
height: 400px;
/* border: 1px solid red; */
`
export const MultiImgMainDiv = styled.div`
height: 60%;
width: 100%;
/* border: 1px solid red; */
display: flex;
align-items: center;
justify-content: center;
`
export const MultiImg = styled.img`
height: 80%;
width: 80%;
`
export const ProductNameDiv = styled.div`
height: 40%;
width: 100%;  
display: flex;
flex-direction: column;
align-items: center;
padding-top: 5%;
color: var(--text, #373737);
text-align: center;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const MultiButton = styled.button`
width: 80%;
height: 30%;
flex-shrink: 0;
margin-top: 5%;
border: none;
clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
background-color: #006DAB;
color: #FFF;
font-family: Montserrat;
font-size: 70%;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const MultiArrowDiv = styled.div`
display: flex;
align-items: center;
gap: 25px;
margin-top: 15px;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 90%;
font-style: normal;
font-weight: 500;
line-height: normal;
`