import { useState, useEffect } from "react"; // ✅ Add useEffect!
import { useParams } from "react-router-dom";
import Arrow5 from "../../assets/down-arrow.svg";
import { Mockdata } from "../../MockData/mockdata";
import { CaravanData } from "../../MockData/caravanMockData";
import { TuningData } from "../../MockData/TuningMockData";
import { UsedCarData } from "../../MockData/mockDataUsedCar";
import {
  BestArrowWrap,
  BestWrap,
  CarChildBrand,
  ChildCarImg,
  ChildCarName,
  ChildDataWrapper,
  ChildImageWrapper,
  DataName,
  Id,
  IdDiv,
  IdP,
  IRchild,
  ItemReviewScroll,
  MainDiv,
  NameBrandDiv,
  NameBrandDiv2,
  Premium,
  Premiumh1,
  PremiumSpan,
} from "../../Styles/DetailedPageStyle/ItemReviews";

const ItemReviewsComponent = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    let data = [];

    if (id.charAt(0) === "1") {
      data = Mockdata;
    } else if (id.charAt(0) === "2") {
      data = CaravanData;
    } else if (id.charAt(0) === "4") {
      data = TuningData;
    } else if (id.charAt(0) === "5") {
      data = UsedCarData;
    }

    setItemData(data);
  }, [id]);

  return (
    <MainDiv>
      <Premium>
        <Premiumh1>
          Premium Review <PremiumSpan>35</PremiumSpan>
        </Premiumh1>
        <div>
          <BestWrap>
            <p>Best</p>
            <BestArrowWrap>
              <img src={Arrow5} alt="Arrow" />
            </BestArrowWrap>
          </BestWrap>
        </div>
      </Premium>
      <hr />
      <ItemReviewScroll>
        {itemData.map((car) => (
          <IRchild>
            <ChildImageWrapper>
              <ChildCarImg src={car.image} alt="Car IMage" />
            </ChildImageWrapper>
            <ChildDataWrapper>
              <DataName>
                <NameBrandDiv>
                  <ChildCarName>{car.name}</ChildCarName>
                  <CarChildBrand>{car.brand}</CarChildBrand>
                  <Id>{car.type}</Id>
                </NameBrandDiv>
                <NameBrandDiv2>
                  <IdDiv>
                    <Id>Id:</Id>
                    <IdP>{car.id}</IdP>
                  </IdDiv>
                  <IdDiv>
                    <Id>Date:</Id>
                    <IdP>{car.year}</IdP>
                  </IdDiv>
                  <IdDiv>
                    <Id>Location:</Id>
                    <IdP>{car.location}</IdP>
                  </IdDiv>
                </NameBrandDiv2>
              </DataName>
            </ChildDataWrapper>
          </IRchild>
        ))}
      </ItemReviewScroll>
      <hr />
    </MainDiv>
  );
};

export default ItemReviewsComponent;
