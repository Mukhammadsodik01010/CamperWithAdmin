import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Mockdata } from "../../MockData/mockdata";
import Navbarcomponent from "../Navbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  BasicTabsMainDiv,
  ChildRight,
  ChildRightCompanyName,
  ChildRighth1,
  ChildRighth2,
  ChildRighth3,
  ChildRightP,
  CopfortLeft,
  CopfortLefth1,
  CopfortLeftP,
  CopfortMain,
  CopfortMain2,
  CopfortRight,
  CopfortRight2,
  CopfortRight3,
  DetailedPart,
  DetailedPartChild,
  DetailedPartImg,
  DetailedPartLeft,
  DetailedPartRight,
  DetailMainBg,
  MainH1,
  TidyingLeft,
  TidyingLeft2,
  TidyingMain,
  TidyingRight,
} from "../../Styles/DetailedPageStyle/DetailedPage";
import FooterComponent from "../../Footer";
import BasicTabs from "./TabsDetailedPage";
import { CaravanData } from "../../MockData/caravanMockData";
import { TuningData } from "../../MockData/TuningMockData";
import { UsedCarData } from "../../MockData/mockDataUsedCar";

const DetailedPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    let foundCar = null;

    if (id.charAt(0) === "1") {
      foundCar = Mockdata.find((car) => car.id === id);
    } else if (id.charAt(0) === "2") {
      foundCar = CaravanData.find((car) => car.id === id);
    } else if (id.charAt(0) === "4") {
      foundCar = TuningData.find((car) => car.id === id);
    } else if (id.charAt(0) === "5") {
      foundCar = UsedCarData.find((car) => car.id === id);
    }

    setCar(foundCar);
  }, [id]);

  if (!car) {
    return <div>Loading or not found...</div>;
  }

  return (
    <>
      <Navbarcomponent />
      <DetailMainBg>
        <MainH1>{car.name}</MainH1>
        <Stack spacing={2} direction="row">
          <Button size="large" variant="contained">
            ADD TO CART
          </Button>
          <Button color="inherit" size="large" variant="outlined">
            COMPARE
          </Button>
        </Stack>
      </DetailMainBg>

      <DetailedPart key={car.id}>
        <DetailedPartLeft>
          <DetailedPartImg src={car.image} alt={car.name} />
        </DetailedPartLeft>
        <DetailedPartRight>
          <DetailedPartChild>
            <ChildRight>
              <ChildRighth1>{car.name}</ChildRighth1>
              <ChildRightP>{car.cost} $</ChildRightP>
            </ChildRight>
            <ChildRighth2>{car.brand}</ChildRighth2>
            <hr />
            <ChildRight>
              <div>
                <ChildRighth3>Company</ChildRighth3>
                <ChildRighth3>People</ChildRighth3>
                <ChildRighth3>License type</ChildRighth3>
              </div>
              <div>
                <ChildRightCompanyName>Aidal company</ChildRightCompanyName>
                <ChildRightCompanyName>12</ChildRightCompanyName>
                <ChildRightCompanyName>License type</ChildRightCompanyName>
              </div>
            </ChildRight>
          </DetailedPartChild>
        </DetailedPartRight>
      </DetailedPart>
      <CopfortMain>
        <CopfortLeft>
          <CopfortLefth1>Comfort</CopfortLefth1>
          <CopfortLeftP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh
            urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id
            in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar.
            Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis
            arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed
            proin iaculis mi.
          </CopfortLeftP>
        </CopfortLeft>
        <CopfortRight></CopfortRight>
      </CopfortMain>
      <TidyingMain>
        <TidyingLeft>

        </TidyingLeft>
        <TidyingRight>
            <CopfortLefth1>Tidying away is child’s play!</CopfortLefth1>
            <CopfortLeftP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</CopfortLeftP>
        </TidyingRight>
      </TidyingMain>

      <CopfortMain2>
        <CopfortLeft>
          <CopfortLefth1>Ventilated , Lit up</CopfortLefth1>
          <CopfortLeftP>
            In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability.
As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers…
Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.												
					
          </CopfortLeftP>
        </CopfortLeft>
        <CopfortRight2></CopfortRight2>
      </CopfortMain2>

      <TidyingMain>
        <TidyingLeft2>

        </TidyingLeft2>
        <TidyingRight>
            <CopfortLefth1>Easy access</CopfortLefth1>
            <CopfortLeftP>We add little touches that your joints will thank you for…
All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle
All our vans are equipped with an electric step.</CopfortLeftP>
        </TidyingRight>
      </TidyingMain>
      <CopfortMain2>
        <CopfortLeft>
          <CopfortLefth1>Heating when driving</CopfortLefth1>
          <CopfortLeftP>
            Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago.
One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.
          </CopfortLeftP>
        </CopfortLeft>
        <CopfortRight3></CopfortRight3>
      </CopfortMain2>

      <BasicTabsMainDiv>
        <BasicTabs />
      </BasicTabsMainDiv>

      <FooterComponent />
    </>
  );
};

export default DetailedPage;
