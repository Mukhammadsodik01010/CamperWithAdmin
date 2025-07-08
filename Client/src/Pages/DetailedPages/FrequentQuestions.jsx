import React from "react";
import DownArrow from '../../assets/down-arrow.svg'
import {
    FrequentChildDiv,
  InputsWrapper,
  InputTopH1,
  InputYourButton1,
  InputYourEmail,
  InputYourName,
  InputYourText,
  QuestionInputsDiv,
  QuestionsChild,
  QuestionsChildhr,
  QuestionsChildName,
  QuestionsChildQ,
  QuestionsDiv,
  QuestionsMainDiv,
} from "../../Styles/DetailedPageStyle/Question";

const FrequentQuestions = () => {
  return (
    <QuestionsMainDiv>
          <QuestionsDiv>
            <QuestionsChild>
              <FrequentChildDiv>
                <QuestionsChildQ>Frequently asked questions </QuestionsChildQ>
                <img src={DownArrow} alt="Arrow" />
              </FrequentChildDiv>
            </QuestionsChild>
            <QuestionsChild>
              <FrequentChildDiv>
                <QuestionsChildQ>Frequently asked questions </QuestionsChildQ>
                <img src={DownArrow} alt="Arrow" />
              </FrequentChildDiv>
            </QuestionsChild>
            <QuestionsChild>
              <FrequentChildDiv>
                <QuestionsChildQ>Frequently asked questions </QuestionsChildQ>
                <img src={DownArrow} alt="Arrow" />
              </FrequentChildDiv>
            </QuestionsChild>
            <QuestionsChild>
              <FrequentChildDiv>
                <QuestionsChildQ>Frequently asked questions </QuestionsChildQ>
                <img src={DownArrow} alt="Arrow" />
              </FrequentChildDiv>
            </QuestionsChild>
            <QuestionsChild>
              <FrequentChildDiv>
                <QuestionsChildQ>Frequently asked questions </QuestionsChildQ>
                <img src={DownArrow} alt="Arrow" />
              </FrequentChildDiv>
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

export default FrequentQuestions;
