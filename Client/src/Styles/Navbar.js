import styled from "styled-components";

export const NavbarMain = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 70px;
   box-shadow: 
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, 
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  @media only screen and (max-width: 1435px) {
   padding: 22px 50px;
  }
  @media only screen and (max-width: 1000px) {
   padding: 22px 40px;
  }
  @media only screen and (max-width: 800px) {
   padding: 22px 30px;
  }
  @media only screen and (max-width: 500px) {
   padding: 22px 20px;
  }
`;
export const NavLeft = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LeftBurgerButton = styled.div`
  display: none;
  @media only screen and (max-width: 1435px) {
    display: flex;
    margin-top: -5px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavMid = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media only screen and (max-width: 1435px) {
    display: none;
  }
`;

export const NavMidComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 24px;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    border-radius: 10px;
    background: rgba(0, 109, 171, 0.05);
  }
  @media only screen and (max-width: 1435px) {
    
  }
`;
export const NavRight = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
`;
export const HiddenImg = styled.img`
  display: flex;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const NavRightEng = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const RightBurgerImg = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;
export const NavRightEngDrower = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
