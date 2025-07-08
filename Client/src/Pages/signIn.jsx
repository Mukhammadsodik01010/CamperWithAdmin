import React from "react";
import GoogleImg from "../assets/google.svg";
import NeverImg from "../assets/never.svg";
import KakaoImg from "../assets/kakao.svg";
import {
  AccountButton,
  CheckboxInput,
  CheckboxMain,
  CheckboxMainChild,
  CheckboxP,
  Email,
  ImagesMain,
  ImageWrapper,
  Inputs,
  Ordiv,
  OrLinehr,
  SignChild,
  Signin,
  SigninButton,
  SignInMain,
} from "../Styles/signIn";
import { Link } from "react-router-dom";

const SignInComp = () => {
  return (
    <SignInMain>
      <SignChild>
        <Signin>Sign in</Signin>
        <Email>Email</Email>
        <Inputs type="text" placeholder="Your email" />
        <Email>Password</Email>
        <Inputs type="text" placeholder="Your password" />
        <CheckboxMain>
          <CheckboxMainChild>
            <CheckboxInput type="checkbox" />
            <CheckboxP>Keep me logged in</CheckboxP>
          </CheckboxMainChild>
          <CheckboxP>Forget your password ?</CheckboxP>
        </CheckboxMain>
        <SigninButton>SIGN IN</SigninButton>
        <Ordiv>
          <OrLinehr />
          <p>OR</p>
          <OrLinehr />
        </Ordiv>
        <ImagesMain>
          <ImageWrapper>
            <img src={NeverImg} alt="Arrow" />
          </ImageWrapper>
          <ImageWrapper $google>
            <img src={GoogleImg} alt="Arrow" />
          </ImageWrapper>
          <ImageWrapper $kakao>
            <img src={KakaoImg} alt="Arrow" />
          </ImageWrapper>
        </ImagesMain>
        <Link to={"/register"}>
          <AccountButton>CREATE ACCOUNT</AccountButton>
        </Link>
      </SignChild>
    </SignInMain>
  );
};

export default SignInComp;
