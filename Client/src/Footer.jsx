import React from "react";
import InstagramIcon from "./assets/InstagramImg.svg";
import YoutubeIcon from "./assets/YoutubeImg.svg";
import NetflixIocn from "./assets/NetflixImg.svg";
import FooterLogo from "./assets/CamperFooter.svg";
import {
  FooterDivs,
  FooterH1,
  FooterIcons,
  FooterMain,
  FooterP,
} from "./Styles/Footer";

const FooterComponent = () => {
  return (
    <FooterMain>
      <div>
        <img src={FooterLogo} alt="" />
      </div>
      <FooterDivs>
        <FooterH1>Service</FooterH1>
        <FooterP>Camping</FooterP>
        <FooterP>Lodging</FooterP>
        <FooterP>Harbor</FooterP>
        <FooterP>Day Use</FooterP>
      </FooterDivs>
      <FooterDivs>
        <FooterH1>Menu</FooterH1>
        <FooterP>About</FooterP>
        <FooterP>Service</FooterP>
        <FooterP>Booking</FooterP>
        <FooterP>Blog</FooterP>
      </FooterDivs>
      <div>
        <FooterH1>Contact</FooterH1>
        <FooterIcons>
          <img src={YoutubeIcon} alt="Image" />
          <img src={InstagramIcon} alt="Image" />
          <img src={NetflixIocn} alt="Image" />
        </FooterIcons>
        <FooterP>021 Korea Seul, LA</FooterP>
        <FooterP>camper@example.com</FooterP>
        <FooterP>(021) 345-6789-99</FooterP>
      </div>
    </FooterMain>
  );
};

export default FooterComponent;
