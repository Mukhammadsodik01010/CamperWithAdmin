import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import RightArrow from "../assets/RightArrovVector.svg";
import DownArrow from "../assets/down-arrow.svg";
import BurgerImg from "../assets/burgerButton.svg";
import { Link } from "react-router-dom";
import { DrowerLinkWrapper, DrowerMain } from "../Styles/Drower";
import { NavRightEngDrower } from "../Styles/Navbar";

const TemporaryDrawerRight = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <DrowerMain>
        <DrowerLinkWrapper>
          <Link className="NavLink" to={"/motor"}>
            <p>Motor</p>
          </Link>
          <img src={RightArrow} alt="" />
        </DrowerLinkWrapper>
        <DrowerLinkWrapper>
          <Link className="NavLink" to={"/caravan"}>
            <p>Caravan</p>
          </Link>
          <img src={RightArrow} alt="" />
        </DrowerLinkWrapper>
        <DrowerLinkWrapper>
          <Link className="NavLink" to={"/tuning"}>
            <p>Tuning</p>
          </Link>
          <img src={RightArrow} alt="" />
        </DrowerLinkWrapper>
        <DrowerLinkWrapper>
          <Link className="NavLink" to={"/usedcar"}>
            <p>Used Car</p>
          </Link>
          <img src={RightArrow} alt="" />
        </DrowerLinkWrapper>
        <Link className="NavLink" to={"/campingplace"}>
          <DrowerLinkWrapper>
            <p>Camping Place</p>
          </DrowerLinkWrapper>
        </Link>
        <Link className="NavLink" to={"/signin"}>
          <DrowerLinkWrapper>
            <p>Sign in</p>
          </DrowerLinkWrapper>
        </Link>
        <Link className="NavLink">
          <DrowerLinkWrapper>
            <p>My orders</p>
          </DrowerLinkWrapper>
        </Link>
        <Link className="NavLink">
          <DrowerLinkWrapper>
            <p>Log out</p>
          </DrowerLinkWrapper>
        </Link>
        <Link className="NavLink">
          <DrowerLinkWrapper>
            <p>Settings</p>
          </DrowerLinkWrapper>
        </Link>
        <DrowerLinkWrapper>
          <NavRightEngDrower>
            <p>Eng</p>
            <img src={DownArrow} alt="" />
          </NavRightEngDrower>
        </DrowerLinkWrapper>
      </DrowerMain>
    </Box>
  );

  return (
    <div>
      <img src={BurgerImg} alt="Image" onClick={toggleDrawer(true)} />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
export default TemporaryDrawerRight;
