import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import BurgerImg from "../assets/burgerButton.svg";
import Compare1Img from "../assets/Compare1.svg";
import Compare2Img from "../assets/Compare2.svg";
import Compare3Img from "../assets/CarImg8.svg";
import AccordionExpandIcon from "./acardion";
import {
  AcardionDiv,
  ComopareImg,
  CompareImgDiv,
  CompareImgWrapper,
  CompareP,
  FromToInput,
  FromToMain,
  SectionDrowerDiv,
  SectionLeftBtn,
  SectionLeftChildh2,
} from "../Styles/Section";

const SectionDrower = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <SectionDrowerDiv>
        <div>
          <SectionLeftChildh2>Cost of car</SectionLeftChildh2>
          <hr />
          <FromToMain>
            <div>
              <p>from</p>
              <FromToInput type="text" />
            </div>
            <div>
              <p>to</p>
              <FromToInput type="text" />
            </div>
          </FromToMain>
        </div>
        <AcardionDiv>
          <AccordionExpandIcon />
        </AcardionDiv>
        <FromToMain>
          <SectionLeftBtn>Cancel</SectionLeftBtn>
          <SectionLeftBtn $second>Search</SectionLeftBtn>
        </FromToMain>
        <CompareP>Compare</CompareP>
        <CompareImgWrapper>
          <CompareImgDiv>
            <ComopareImg src={Compare1Img} alt="Arrow" />
          </CompareImgDiv>
          <CompareImgDiv>
            <ComopareImg src={Compare2Img} alt="Arrow" />
          </CompareImgDiv>
          <CompareImgDiv>
            <ComopareImg src={Compare3Img} alt="Arrow" />
          </CompareImgDiv>
        </CompareImgWrapper>
      </SectionDrowerDiv>
    </Box>
  );

  return (
    <div>
      <img src={BurgerImg} onClick={toggleDrawer(true)} />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
export default SectionDrower;
