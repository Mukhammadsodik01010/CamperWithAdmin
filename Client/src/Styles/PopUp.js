import styled from "styled-components";
import Popup1Bg from "../assets/PopupBg1.svg";
import PopUp2Bg from '../assets/PopUpBg2.svg'
import PopUp3Bg from '../assets/PopUp3Bg.svg'
import PopUp4bg from '../assets/PopUp4Bg.svg'

export const PopUpBgImgDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 292px;
height: 292px;
background-image: url("${Popup1Bg}");
background-repeat: no-repeat;
background-position: center;    
background-size: cover;
`
export const PopUpBgImgDiv2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 292px;
height: 292px;
background-image: url("${PopUp2Bg}");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
export const PopUpBgImgDiv3 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 292px;
height: 292px;
background-image: url("${PopUp3Bg}");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
export const PopUpBgImgDiv4 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 292px;
height: 292px;
background-image: url("${PopUp4bg}");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`

export const VidePlayDiv = styled.div`
display: flex;
align-items: center;justify-content: center;
width: 58px;
height: 58px;
border: 2px solid white;
border-radius: 50%;
background-color: rgba(255, 255, 255, 0.30);
padding-left: 5px;

`
export const PupUpMain = styled.div`
width: 100%;
height: 100%;                                 ;
padding: 30px;
/* border: 1px solid red; */
`
export const VideName = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-family: "Open Sans";
font-size: 23px;
font-weight: 700;
padding-left: 10px;
`
export const IframeWrapper = styled.iframe`
width: 100%;  
height: 90%;
margin-top: 30px;
border-radius: 20px;
`
