import ArrowDown from "../assets/down-arrow.svg";
import Compare1Img from "../assets/Compare1.svg";
import Compare2Img from "../assets/Compare2.svg";
import Compare3Img from "../assets/CarImg8.svg";
import Menu1 from "../assets/MenuIcon.svg";
import Menu2 from "../assets/MenuIcon2.svg";
import Star from "../assets/StarImg.svg";
import {
  AcardionDiv,
  BrandNameDiv,
  CarName,
  CarNameDiv,
  ChildBgImg,
  ChildBgImgImg,
  ComopareImg,
  CompareImgDiv,
  CompareImgWrapper,
  CompareP,
  Dollor,
  DownArrowDiv,
  FromToInput,
  FromToMain,
  Menu1Div,
  Menu2Div,
  MenuDiv,
  OrderBtn,
  OrderBtnDiv,
  SectionBottomChild,
  SectionLeft,
  SectionLeftBtn,
  SectionLeftChildh2,
  SectionMain,
  Sectionright,
  SectionRightBottom,
  SectionRightTop,
  SectionRightTopRightDiv,
  SectionTopHiddenDiv,
  SectionTopRigthBtn,
  SelectDiv,
  SixtyDiv,
  SixtyDivHidden,
  SortByDiv,
  SortByDivHidden,
  Toph4,
  TopRightMain,
  TopSpan,
} from "../Styles/Section";

import { TuningData } from "../MockData/TuningMockData";
import { Link } from "react-router-dom";
import AccordionExpandIcon from "./acardion";
import SectionDrower from "./SectionDrower";

const TSectionComp = () => {
  const products = TuningData;

  return (
    <SectionMain>
      <SectionLeft>
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
      </SectionLeft>
      <Sectionright>
        <SectionRightTop>
          <SectionRightTopRightDiv>
            <SectionTopRigthBtn>
              <SectionDrower />
            </SectionTopRigthBtn>
            <Toph4>
              Item <TopSpan>25.156</TopSpan>
            </Toph4>
          </SectionRightTopRightDiv>

          <TopRightMain>
            <SortByDiv>
              <p>Sort by</p>
              <SelectDiv>
                <p>Select</p>
                <DownArrowDiv>
                  <img src={ArrowDown} alt="Arrow" />
                </DownArrowDiv>
              </SelectDiv>
            </SortByDiv>
            <SixtyDiv>
              <p>60</p>
              <DownArrowDiv>
                <img src={ArrowDown} alt="Arrow" />
              </DownArrowDiv>
            </SixtyDiv>
            <MenuDiv>
              <Menu1Div>
                <img src={Menu1} alt="Arrow" />
              </Menu1Div>
              <Menu2Div>
                <img src={Menu2} alt="Arrow" />
              </Menu2Div>
            </MenuDiv>
          </TopRightMain>
        </SectionRightTop>
        <SectionTopHiddenDiv>
          <SortByDivHidden>
            <p>Sort by</p>
            <SelectDiv>
              <p>Select</p>
              <DownArrowDiv>
                <img src={ArrowDown} alt="Arrow" />
              </DownArrowDiv>
            </SelectDiv>
          </SortByDivHidden>
          <SixtyDivHidden>
            <p>60</p>
            <DownArrowDiv>
              <img src={ArrowDown} alt="Arrow" />
            </DownArrowDiv>
          </SixtyDivHidden>
        </SectionTopHiddenDiv>
        <hr />
        <SectionRightBottom>
          {products.map((product) => (
            <Link
              className="NavLink"
              key={product.id}
              to={`/motor/${product.id}`}
            >
              <SectionBottomChild>
                <ChildBgImg>
                  <ChildBgImgImg src={product.image} alt="Arrow" />
                </ChildBgImg>
                <div>
                  <CarName>{product.name}</CarName>
                  <BrandNameDiv>
                    <p>{product.brand}</p>
                    <CarNameDiv>
                      <img src={Star} alt="star" />
                      <p>{product.ranking}</p>
                    </CarNameDiv>
                  </BrandNameDiv>
                  <Dollor>{product.cost} $</Dollor>
                  <OrderBtnDiv>
                    <OrderBtn>Order </OrderBtn>
                    <OrderBtn>Compare</OrderBtn>
                  </OrderBtnDiv>
                </div>
              </SectionBottomChild>
            </Link>
          ))}
        </SectionRightBottom>
      </Sectionright>
    </SectionMain>
  );
};

export default TSectionComp;
