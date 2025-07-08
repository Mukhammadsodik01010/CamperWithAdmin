import React from "react";
import Popup from "reactjs-popup";
import XButton from "../assets/button-x.svg"
import VodeoPlay from '../assets/Vector.svg'
import { IframeWrapper, PopUpBgImgDiv, PopUpBgImgDiv2, PopUpBgImgDiv3, PopUpBgImgDiv4, PupUpMain, VideName, VidePlayDiv } from "../Styles/Popup";

// Birinchi pop up

 export const PopUpCompOne = () => (
  <Popup
    trigger={
      <PopUpBgImgDiv >
          <VidePlayDiv>
            <img src={VodeoPlay} alt="" />
          </VidePlayDiv>
      </PopUpBgImgDiv>
    }
    modal
    nested
    contentStyle
  >
    {(close) => (
      <PupUpMain>
        <VideName>
            <div > Luxery Caravan </div>
            <img src={XButton} alt="" onClick={close} />
        </VideName>
          <IframeWrapper
            src="https://www.youtube.com/embed/WwPyPlX0hJA?si=kxjjhN4GYrywWsOm"
            title="YouTube video player"
            frameborder="0"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></IframeWrapper>
      </PupUpMain>
    )}
  </Popup>
);

// Ikkinchi pop up

 export const PopUpCompTwo = () => (
  <Popup
    trigger={
      <PopUpBgImgDiv2 >
          <VidePlayDiv>
            <img src={VodeoPlay} alt="" />
          </VidePlayDiv>
      </PopUpBgImgDiv2>
    }
    modal
    nested
  >
    {(close) => (
      <PupUpMain>
        <VideName>
            <div > Luxery Caravan </div>
            <img src={XButton} alt="" onClick={close} />
        </VideName>
          <IframeWrapper
            src="https://www.youtube.com/embed/WwPyPlX0hJA?si=kxjjhN4GYrywWsOm"
            title="YouTube video player"
            frameborder="0"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></IframeWrapper>
      </PupUpMain>
    )}
  </Popup>
);


// Uchinchi PopUp

 export const PopUpCompThree = () => (
  <Popup
    trigger={
      <PopUpBgImgDiv3 >
          <VidePlayDiv>
            <img src={VodeoPlay} alt="" />
          </VidePlayDiv>
      </PopUpBgImgDiv3>
    }
    modal
    nested
  >
    {(close) => (
      <PupUpMain>
        <VideName>
            <div > Luxery Caravan </div>
            <img src={XButton} alt="" onClick={close} />
        </VideName>
          <IframeWrapper
            src="https://www.youtube.com/embed/WwPyPlX0hJA?si=kxjjhN4GYrywWsOm"
            title="YouTube video player"
            frameborder="0"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></IframeWrapper>
      </PupUpMain>
    )}
  </Popup>
);

// To'rtinchi PopUp

 export const PopUpCompFour = () => (
  <Popup
    trigger={
      <PopUpBgImgDiv4 >
          <VidePlayDiv>
            <img src={VodeoPlay} alt="" />
          </VidePlayDiv>
      </PopUpBgImgDiv4>
    }
    modal
    nested
  >
    {(close) => (
      <PupUpMain>
        <VideName>
            <div > Luxery Caravan </div>
            <img src={XButton} alt="" onClick={close} />
        </VideName>
          <IframeWrapper
            src="https://www.youtube.com/embed/WwPyPlX0hJA?si=kxjjhN4GYrywWsOm"
            title="YouTube video player"
            frameborder="0"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></IframeWrapper>
      </PupUpMain>
    )}
  </Popup>
);
