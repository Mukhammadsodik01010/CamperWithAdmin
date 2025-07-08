import styled from "styled-components";
import BgImg from "../../assets/BackgroundThree.svg";
import Image111 from '../../assets/image-6.svg'
import Image2222 from '../../assets/image-7.svg'
import Image333 from '../../assets/image-8.svg'
import Image44444 from '../../assets/image-9.svg'
import Image5555 from '../../assets/image-10.svg'

export const DetailMainBg = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("${BgImg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  font-family: Montserrat;
  font-size: 60px;
  font-weight: 700;
`;
export const MainH1 = styled.h1`
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 20px;
@media only screen and (max-width: 700px) {
  font-size: 40px;
  
}
`









export const DetailedPart = styled.div`
display: flex;
padding: 0 70px;
@media only screen and (max-width: 1200px) {
  flex-direction: column;
}
`
export const DetailedPartLeft = styled.div`
flex: 2;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
@media only screen and (max-width: 1200px) {
  flex: 1.5;
}
`
export const DetailedPartImg = styled.img`
height: 400px;

@media only screen and (max-width: 1550px) {
  height: 350px;
}
@media only screen and (max-width: 1260px) {
  height: 250px;
}
@media only screen and (max-width: 550px) {
  height: 200px;
}

`


export const DetailedPartRight = styled.div`
flex: 2;
display: flex;
align-items: center;
justify-content: center;
`
export const DetailedPartChild = styled.div`
height: 90%;
width: 90%;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding: 20px;
`
export const ChildRight = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 10px;
`
export const ChildRighth1 = styled.h1`
color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media only screen and (max-width: 650px) {
  font-size: 20px;
}
@media only screen and (max-width: 550px) {
  font-size: 15px;
  font-weight: 600;
}
@media only screen and (max-width: 460px) {
  font-size: 12px;
  font-weight: 500;
}
@media only screen and (max-width: 410px) {
  font-size: 10px;
}
`


export const ChildRightP = styled.p`
color: #006DAB;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media only screen and (max-width: 650px) {
  font-size: 25px;
}
@media only screen and (max-width: 550px) {
  font-size: 20px;
}
@media only screen and (max-width: 460px) {
  font-size: 15px;
}
`
export const ChildRighth2 = styled.h2`
color: #000;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 10px;
margin-bottom: 10px;  
@media only screen and (max-width: 650px) {
  font-size: 14px;
}
@media only screen and (max-width: 550px) {
  font-size: 10px;
}
`
export const ChildRighth3 = styled.h3`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 10px;
@media only screen and (max-width: 550px) {
  font-size: 12px;
}
`
export const ChildRightCompanyName = styled.p`
color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 10px;
@media only screen and (max-width: 550px) {
  font-size: 12px;
}
`
export const CopfortMain = styled.div`
display: flex;
padding: 0 70px;
margin-top: 20px;
@media only screen and (max-width: 1000px) {
  flex-direction: column-reverse;
}
`

export const CopfortLeft = styled.div`
/* flex: 2; */
padding: 20px;
width: 50%;
@media only screen and (max-width: 1000px) {
  width: 100%;
}
`
export const CopfortLefth1 = styled.h1`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
@media only screen and (max-width: 550px) {
  font-size: 30px;
  font-weight: 500;
}
@media only screen and (max-width: 450px) {
  font-size: 20px;
  font-weight: 500;
}
`
export const CopfortLeftP = styled.p`
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
margin-top: 20px;
@media only screen and (max-width: 550px) {
  font-size: 14px;
  font-weight: 300;
}
@media only screen and (max-width: 450px) {
  font-size: 12px;
  font-weight: 300;
  margin-top: 10px;
}
`
export const CopfortRight = styled.div`
/* flex: 2; */
background-image: url("${Image111}");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 400px;
width: 50%;
@media only screen and (max-width: 1000px) {
  width: 100%;
}
@media only screen and (max-width: 550px) {
  height: 300px;
}
`
export const TidyingMain = styled.div`
display: flex;
padding: 0 70px;
@media only screen and (max-width: 1000px) {
  flex-direction: column;
}
`
export const TidyingLeft = styled.div`
height: 400px;
background-image: url("${Image2222}");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 50%;
@media only screen and (max-width: 1000px) {
  width: 100%;
}
`
export const TidyingRight = styled.div`
padding: 20px;
width: 50%; 
@media only screen and (max-width: 1000px) {
  width: 100%;
}
`
export const CopfortMain2 = styled.div`
display: flex;
padding: 0 70px;
/* margin-top: 20px; */
@media only screen and (max-width: 1000px) {
  flex-direction: column-reverse;
}
`
export const CopfortRight2 = styled.div`
/* flex: 2; */
background-image: url("${Image333}");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 400px;
width: 50%;
@media only screen and (max-width: 1000px) {
  width: 100%;
}
@media only screen and (max-width: 550px) {
  height: 300px;
}
`
export const TidyingLeft2 = styled.div`
height: 400px;
background-image: url("${Image44444}");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 50%;
@media only screen and (max-width: 1000px) {
  width: 100%;
}
`
export const CopfortRight3 = styled.div`
/* flex: 2; */
background-image: url("${Image5555}");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 400px;
width: 50%;
@media only screen and (max-width: 1000px) {
  width: 100%;
}
@media only screen and (max-width: 550px) {
  height: 300px;
}
`











export const BasicTabsMainDiv = styled.div`
padding: 0 70px;
margin-top: 30px;
@media only screen and (max-width: 1000px) {
    padding: 0 30px;
}  
@media only screen and (max-width: 700px) {
    padding: 0 0px;
}    
`
