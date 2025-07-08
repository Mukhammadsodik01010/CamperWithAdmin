import React from "react";
import MapImg from "../../assets/map.svg";
import {
  ContactImg,
  ContactMiniCHild,
  ContactMiniCHildLeft,
  InputsWrapper,
  InputTopH1,
  InputYourButton1,
  InputYourEmail,
  InputYourName,
  InputYourText,
  QuestionInputsDiv,
  QuestionsChild,
  QuestionsChildName,
  QuestionsChildQ,
  QuestionsDiv,
  QuestionsMainDiv,
} from "../../Styles/DetailedPageStyle/Question";

const ContactComponent = () => {
  return (
    <QuestionsMainDiv>
      <QuestionsDiv>
        <QuestionsChild>
          <ContactImg src={MapImg} alt="Map Image" />
          <ContactMiniCHild>
            <ContactMiniCHildLeft>
              <QuestionsChildName>Phone number:</QuestionsChildName>
              <QuestionsChildQ>
                +7 237 181 181 <br />
                +7 210 181 191
              </QuestionsChildQ>
            </ContactMiniCHildLeft>
            <ContactMiniCHildLeft>
              <QuestionsChildName>E-mail:</QuestionsChildName>
              <QuestionsChildQ>logo.uz</QuestionsChildQ>
            </ContactMiniCHildLeft>
          </ContactMiniCHild>
        </QuestionsChild>
      </QuestionsDiv>
      <QuestionInputsDiv>
        <InputsWrapper>
          <InputTopH1>Send a question</InputTopH1>
          <InputYourName type="text" placeholder="Your Name" />
          <InputYourEmail type="email" placeholder="Your email" />
          <InputYourText type="text" placeholder="Your question" />
          <InputYourButton1>Send question</InputYourButton1>
        </InputsWrapper>
      </QuestionInputsDiv>
    </QuestionsMainDiv>
  );
};

export default ContactComponent;
