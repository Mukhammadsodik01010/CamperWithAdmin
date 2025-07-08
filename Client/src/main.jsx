import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import "reactjs-popup/dist/index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
