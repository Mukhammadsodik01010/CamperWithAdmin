import React from "react";
import Navbarcomponent from "./Pages/Navbar";
import MainCarousel from "./Pages/SlickCarousel";
import MultiCaruselComponent, { RecommendComp } from "./Pages/MultiCarusel";
import VideosComponent from "./Pages/Videos";
import BlogsComponent from "./Pages/Blogs";
import FooterComponent from "./Footer";

const HomeComponent = () => {
  return (
    <div>
      <Navbarcomponent />
      <MainCarousel />
      <RecommendComp />
      <MultiCaruselComponent />
      <VideosComponent />
      <BlogsComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
