import styled from "styled-components";
import BgChildImg from "../assets/CarImg11.svg";

export const SectionMain = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 70px;
  margin-top: 60px;
  @media only screen and (max-width: 1520px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 750px) {
    padding: 0 40px;
  }
`;
export const SectionLeft = styled.div`
  flex: 1.5;
  /* border: 1px solid red; */
  @media only screen and (max-width: 1520px) {
    display: none;
  }
`;
export const SectionLeftChild = styled.div``;

export const SectionLeftChildTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

export const SectionLeftChildh2 = styled.h2`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 18px */
  margin-bottom: 17px;
`;
export const FromToMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;
export const FromToInput = styled.input`
  width: 100px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(55, 55, 55, 0.6);
  color: #37373799;
  margin-top: 5px;
`;

export const AcardionDiv = styled.div`
  margin-top: 50px;
`;

export const InputCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
`;
export const SectionLedtINput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;
export const SectionLeftChildInput = styled.input`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #666;
  background: #fff;
`;
export const SectionLeftBtn = styled.button`
  width: 115.804px;
  height: 38.968px;
  flex-shrink: 0;
  border-radius: 60px;
  margin-top: 54px;
  background: ${(props) => (props.$second ? "#006DAB" : "#FF7A00")};
  border: none;
  color: #fff;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  /* btn sh */
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;
export const CompareP = styled.p`
  color: var(--blue, #006dab);
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 60px;
`;
export const CompareImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 10px;
  @media only screen and (max-width: 1450px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;
export const CompareImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
`;
export const ComopareImg = styled.img`
  width: 84px;
  height: 58px;
`;

export const Sectionright = styled.div`
  flex: 5;
  /* border: 1px solid red; */
`;
export const SectionRightTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const SectionRightTopRightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const SectionTopRigthBtn = styled.div`
  display: none;
  @media only screen and (max-width: 1520px) {
    display: flex;
  }
`;

export const Toph4 = styled.h4`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 18px */
`;
export const TopSpan = styled.span`
  color: var(--blue, #006dab);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
`;
export const TopRightMain = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const SortByDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
export const SelectDiv = styled.div`
  width: 227px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  color: rgba(55, 55, 55, 0.6);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  @media only screen and (max-width: 500px) {
    width: 150px;
  }
`;
export const SixtyDiv = styled.div`
  width: 80px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  color: rgba(55, 55, 55, 0.6);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
export const DownArrowDiv = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 0 5px 5px 0;
  border: 1px solid rgba(55, 55, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const Menu1Div = styled.div`
  width: 41px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Menu2Div = styled.div`
  width: 41px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 0 5px 5px 0;
  border: 1px solid rgba(55, 55, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionTopHiddenDiv = styled.div`
  display: none;
  align-items: center;
  justify-content: end;
  gap: 10px;
  margin-bottom: 5px;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;

export const SortByDivHidden = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;
export const SixtyDivHidden = styled.div`
  width: 80px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  color: rgba(55, 55, 55, 0.6);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
  @media only screen and (max-width: 500px) {
    width: 60px;
  }
`;
export const SectionRightBottom = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  gap: 20px;
  justify-content: space-between;
  padding: 37px 0;
  @media only screen and (max-width: 1170px) {
    grid-template-areas: "a a a";
  }
  @media only screen and (max-width: 900px) {
    grid-template-areas: "a a";
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 620px) {
    grid-template-areas: "a";
  }
`;
export const SectionBottomChild = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  /* height: 307px; */
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  /* background-color: red; */
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    cursor: pointer;
  }
`;
export const ChildBgImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250pxpx;
  height: 137.433px;
  flex-shrink: 0;
`;
export const ChildBgImgImg = styled.img`
  height: 90%;
  width: 90%;
  border: none;
  border-radius: 5px;
`;
export const CarName = styled.h1`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2px;
  text-align: start !important;
`;
export const BrandNameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
`;
export const CarNameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Dollor = styled.h2`
  color: var(--blue, #006dab);
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 21px;
`;
export const OrderBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
`;
export const OrderBtn = styled.button`
  width: 94px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid var(--blue, #006dab);
  
  /* btn sh */
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: var(--blue, #006dab);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    background-color:rgba(160, 157, 157, 0.35);
  }
`;

export const SectionDrowerDiv = styled.div`
  margin-top: 20px;
  padding: 20px;
`;
