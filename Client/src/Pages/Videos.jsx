import React from "react";
import {
  RecommendDiv,
  RecommendH1,
  RecommendUnderline,
} from "../Styles/MultiCarousel";
import {
  VideosChild,
  VideosChildLastTwo,
  VideosChildSecondLine,
  VideosMain,
} from "../Styles/videos";
import {
  PopUpCompFour,
  PopUpCompOne,
  PopUpCompThree,
  PopUpCompTwo,
} from "./Popup";

const VideosComponent = () => {
  return (
    <>
      <RecommendDiv>
        <RecommendUnderline>
          <RecommendH1>Videos</RecommendH1>
        </RecommendUnderline>
      </RecommendDiv>
      <VideosMain>
        <VideosChild>
          <PopUpCompOne />
        </VideosChild>
        <VideosChild>
          <PopUpCompTwo />
        </VideosChild>
        <VideosChild>
          <PopUpCompThree />
        </VideosChild>
        <VideosChild>
          <PopUpCompFour />
        </VideosChild>
        <VideosChildSecondLine>
          <PopUpCompOne />
        </VideosChildSecondLine>
        <VideosChildSecondLine>
          <PopUpCompTwo />
        </VideosChildSecondLine>
        <VideosChildLastTwo>
          <PopUpCompThree />
        </VideosChildLastTwo>
        <VideosChildLastTwo>
          <PopUpCompFour />
        </VideosChildLastTwo>
      </VideosMain>
    </>
  );
};

export default VideosComponent;
