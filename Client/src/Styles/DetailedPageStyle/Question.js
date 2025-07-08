import styled from "styled-components";

export const QuestionsMainDiv = styled.div`
  display: flex;
  gap: 40px;
  height: 600px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: auto;
  }
`;
export const QuestionsDiv = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const QuestionsChild = styled.div`
  margin-top: 20px;
`;
export const QuestionsChildName = styled.p`
  color: rgba(55, 55, 55, 0.5);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const QuestionsChildQ = styled.h1`
  color: #373737;
  font-family: Montserrat;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
  @media only screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
export const QuestionsChildhr = styled.hr`
  margin-top: 20px;
`;
export const QuestionInputsDiv = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const InputsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 109, 171, 0.1);
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;
export const InputTopH1 = styled.h1`
  color: var(--text-color, #023047);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-align: center;
`;
export const InputYourName = styled.input`
  border-radius: 8px;
  border: none;
  background: var(--text, rgba(210, 207, 207, 0.44));
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  padding-left: 30px;
  &::placeholder {
    color: rgba(55, 55, 55, 0.7);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;
export const InputYourEmail = styled.input`
  border-radius: 8px;
  border: none;
  background: var(--text, rgba(210, 207, 207, 0.44));
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  padding-left: 30px;
  &::placeholder {
    color: rgba(55, 55, 55, 0.7);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;
export const InputYourText = styled.input`
  border-radius: 8px;
  border: none;
  background: var(--text, rgba(210, 207, 207, 0.44));
  width: 100%;
  height: 140px;
  flex-shrink: 0;
  padding-left: 30px;
  &::placeholder {
    color: rgba(55, 55, 55, 0.7);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;
export const InputYourButton1 = styled.button`
  border-radius: 8px;
  border: none;
  background: #006dab;
  width: 100%;
  height: 60px;
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
`;


//  frequent questions

export const FrequentChildDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
width: 100%;
height: 80px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
`

// Contact

export const ContactImg = styled.img`
width: 100%;
height: auto;
border-radius: 10px;
background: url(<path-to-image>) lightgray -236.007px -34.061px / 173.41% 152.73% no-repeat;
`
export const ContactMiniCHild = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;
margin-top: 25px;
@media only screen and (max-width: 500px) {
  flex-direction: column;
  gap: 20px;
}
`

export const ContactMiniCHildLeft = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px;
margin-top: 20px;
height: 150px;
width: 100%;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`