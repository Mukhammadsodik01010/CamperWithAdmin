import styled from "styled-components";

export const SignInMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  height: 100vh;
  width: 100%;
`;
export const SignChild = styled.div`
  width: 500px;
  /* height: 614px; */
  height: ${(props) => (props.$register ? "540px" : "614px")};
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 33px;
  @media only screen and (max-width: 550px) {
    width: 450px;
  }
  @media only screen and (max-width: 500px) {
    width: 400px;
  }
  @media only screen and (max-width: 450px) {
    width: 350px;
    padding: 33px 20px;
  }
`;
export const Signin = styled.h1`
  color: var(--text, #373737);
  font-family: "Open Sans";
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Email = styled.p`
  color: rgba(55, 55, 55, 0.8);
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 25px;
  padding-left: 10px;
`;
export const Inputs = styled.input`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.1);
  margin-top: 10px;
  padding: 15px 20px;
  border: none;
  outline: none;
  &::placeholder {
    color: rgba(55, 55, 55, 0.6);
    font-family: "Open Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const CheckboxMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;
export const CheckboxInput = styled.input`
  width: 23px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(55, 55, 55, 0.15);
  margin-left: 10px;
`;
export const CheckboxMainChild = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const CheckboxP = styled.p`
  color: #373737;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const SigninButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--blue, #006dab);
  color: #fff;
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  margin-top: 27px;
`;
export const Ordiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
`;
export const OrLinehr = styled.hr`
  width: 30%;
  background: rgba(55, 55, 55, 0.15);
`;
export const ImagesMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  background: ${(props) =>
    props.$google ? "#BC0000" : props.$kakao ? "#FFC700" : "#039600"};
`;
export const AccountButton = styled.button`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--blue, #006dab);
  margin-top: 20px;
  background-color: #fafafa;
  color: var(--blue, #006dab);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
