import styled from "styled-components";


export const MainDiv = styled.div`
height: 600px;
@media only screen and (max-width: 900px) {
    height: 800px;
  }
`
export const Premium = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Premiumh1 = styled.h1`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 30px;
`;
export const PremiumSpan = styled.span`
  color: var(--blue, #006dab);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const BestWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  width: 177px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  color: var(--blue, #006dab);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  @media only screen and (max-width: 480px) {
    width: 150px;
  }
  @media only screen and (max-width: 480px) {
    width: 120px;
  }
`;
export const BestArrowWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid rgba(55, 55, 55, 0.3);
`;

export const ItemReviewScroll = styled.div`
height: 500px;
overflow-y: scroll;

&::-webkit-scrollbar {
    display: none;
  }
  
scrollbar-width: none;
@media only screen and (max-width: 900px) {
    height: 700px;
  }
`

export const IRchild = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 30px;
  padding-bottom: 10px;
  padding-right: 50px;
  &:hover{
   box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ChildImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  width: 100%;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  flex: 1;
  display: flex;
  justify-content: start;
  overflow: hidden;
  padding: 10px;
  @media only screen and (max-width: 1000px) {
    flex: 2;
  }
  @media only screen and (max-width: 700px) {
    flex: 2.5;
  }
  @media only screen and (max-width: 550px) {
    flex: 0;
  }
`;
export const ChildCarImg = styled.img`
  height: 100px;
  width: 100%;
  @media only screen and (max-width: 550px) {
   height: 200px;
  }
`;
export const ChildDataWrapper = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  @media only screen and (max-width: 550px) { 
    flex: 0;
    width: 100%;
  }
`;
export const DataName = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 550px) { 
    flex-direction: column;
    gap: 20px;
  }
`;
export const NameBrandDiv =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const NameBrandDiv2 =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
@media only screen and (max-width: 550px) { 
    flex-direction: row;
    justify-content: start;
}
`
export const ChildCarName = styled.h2`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const IdDiv = styled.div`
display: flex;
align-items: center;
justify-content: start;
width: 100px;
gap: 10px;
`
export const Id = styled.h3`
  color: rgba(55, 55, 55, 0.7);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const IdP = styled.p`
  color: #373737;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const CarChildBrand = styled.h4`
  color: rgba(55, 55, 55, 0.8);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

