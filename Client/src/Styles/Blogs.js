import styled from "styled-components";

export const BlogMain = styled.div`
  display: flex;
  gap: 33px;
  padding: 0 70px;
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const BlogLeft = styled.div`
  flex: 2;
  /* border: 2px solid red; */
`;
export const BlogH1 = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media only screen and (max-width: 1300px) {
    text-align: center;
  }
  @media only screen and (max-width: 750px) {
    text-align: start;
  }
`;
export const BlogH5 = styled.h5`
  color: var(--sariq, #ff7a00);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 35px;
  @media only screen and (max-width: 1300px) {
    text-align: center;
  }
  @media only screen and (max-width: 750px) {
    text-align: start;
  }
`;
export const BlogP = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  @media only screen and (max-width: 1300px) {
    text-align: center;
  }
  @media only screen and (max-width: 750px) {
    text-align: start;
  }
`;
export const BlogRight = styled.div`
  flex: 4;
  /* border: 2px solid red; */
  display: grid;
  width: 100%;
  grid-template-areas: "a a a";
  gap: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 960px) {
    grid-template-areas: "a a";
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 670px) {
    grid-template-areas: "a";
    justify-content: space-evenly;
  }
`;
export const RectangelImg = styled.img`
  width: 258px;
  height: 258px;
  flex-shrink: 0;
  border-radius: 20px;
`;
export const RectangelImgSecondLine = styled.img`
  width: 258px;
  height: 258px;
  flex-shrink: 0;
  border-radius: 20px;
  @media only screen and (max-width: 670px) {
    display: none;
  }
`;
