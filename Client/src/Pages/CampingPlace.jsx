import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Navbarcomponent from "./Navbar";
import {
  CampingBgDiv,
  CampingBgh1,
  CampingBgh3,
  ChildsMainDiv,
} from "../Styles/CampingPlace";
import FooterComponent from "../Footer";
import { CampingData } from "../MockData/CampingPlaceData";
import { Link } from "react-router-dom";

const CampingPlaceComponent = () => {
  const CampingPlace = CampingData;
  return (
    <>
      <Navbarcomponent />
      <CampingBgDiv>
        <CampingBgh3>Home / Camping place</CampingBgh3>
        <CampingBgh1>Camping places</CampingBgh1>
      </CampingBgDiv>
      <ChildsMainDiv>
        {CampingPlace.map((place) => (
          <Link
            className="NavLink"
            key={place.id}
            to={`/campingplace/${place.id}`}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={place.image}
                  alt={place.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {place.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {place.location}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </ChildsMainDiv>
      <FooterComponent />
    </>
  );
};

export default CampingPlaceComponent;
