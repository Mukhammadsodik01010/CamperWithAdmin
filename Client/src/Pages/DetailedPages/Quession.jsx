import React from "react";
import {
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

const QuessionComponent = () => {
  return (
    <QuestionsMainDiv>
      <QuestionsDiv>
        <QuestionsChild>
          <QuestionsChildName>Name</QuestionsChildName>
          <QuestionsChildQ>
            Question Lorem ipsum dolor sit amet ?
          </QuestionsChildQ>
          <QuestionsChildhr />
        </QuestionsChild>
        <QuestionsChild>
          <QuestionsChildName>Name</QuestionsChildName>
          <QuestionsChildQ>
            Question Lorem ipsum dolor sit amet ?
          </QuestionsChildQ>
          <QuestionsChildhr />
        </QuestionsChild>
        <QuestionsChild>
          <QuestionsChildName>Name</QuestionsChildName>
          <QuestionsChildQ>
            Question Lorem ipsum dolor sit amet ?
          </QuestionsChildQ>
          <QuestionsChildhr />
        </QuestionsChild>
        <QuestionsChild>
          <QuestionsChildName>Name</QuestionsChildName>
          <QuestionsChildQ>
            Question Lorem ipsum dolor sit amet ?
          </QuestionsChildQ>
          <QuestionsChildhr />
        </QuestionsChild>
        <QuestionsChild>
          <QuestionsChildName>Name</QuestionsChildName>
          <QuestionsChildQ>
            Question Lorem ipsum dolor sit amet ?
          </QuestionsChildQ>
          <QuestionsChildhr />
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

export default QuessionComponent;
