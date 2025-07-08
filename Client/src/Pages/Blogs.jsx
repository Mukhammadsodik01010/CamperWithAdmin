import React from "react";
import Rectangle1 from '../assets/Rectangle-1.svg'
import Rectangle2 from '../assets/Rectangle-2.svg'
import Rectangle3 from '../assets/Rectangle-3.svg'
import {
  RecommendDiv,
  RecommendUnderline,
  RecommendH1,
} from "../Styles/MultiCarousel";
import { BlogH1, BlogH5, BlogLeft, BlogMain, BlogP, BlogRight, RectangelImg, RectangelImgSecondLine } from "../Styles/Blogs";
import { CardActionArea } from "@mui/material";

const BlogsComponent = () => {
  return (
    <>
      <div>
        <RecommendDiv>
          <RecommendUnderline>
            <RecommendH1>Blogs</RecommendH1>
          </RecommendUnderline>
        </RecommendDiv>
      </div>
      <BlogMain>
        <BlogLeft>
          <BlogH1>Camper</BlogH1>
          <BlogH5>@camper_1</BlogH5>
          <BlogP>
           Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.
          </BlogP>
        </BlogLeft>
        <BlogRight>
            <RectangelImg src={Rectangle1} alt="Image" />
            <RectangelImg src={Rectangle2} alt="Image" />
            <RectangelImg src={Rectangle3} alt="Image" />
            <RectangelImgSecondLine src={Rectangle1} alt="Image" />
            <RectangelImgSecondLine src={Rectangle2} alt="Image" />
            <RectangelImgSecondLine src={Rectangle3} alt="Image" />
        </BlogRight>
      </BlogMain>
    </>
  );
};

export default BlogsComponent;