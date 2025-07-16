import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
import { Link, useNavigate } from "react-router-dom";

const SignInComp = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const ClientSingIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Enter your email and password");
      return;
    }
    try {
      setLoading(true);
      setMessage("");
      const resData = await fetch(
        "http://localhost:4000/main-client-user/client-logging-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await resData.json()
      
      if (resData.ok) {
        alert("Logged in successfully");
        navigate("/");
      } else {
        setMessage("Invalid email or password")
      }

    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false)
    }
  };

  return (
    <SignInMain>
      <SignChild style={{height:"630px"}}>
        <Signin>Sign in</Signin>
        <Email>Email</Email>
        <Inputs
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Email>Password</Email>
        <Inputs
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CheckboxMain>
          <CheckboxMainChild>
            <CheckboxInput type="checkbox" />
            <CheckboxP>Keep me logged in</CheckboxP>
          </CheckboxMainChild>
          <CheckboxP>Forget your password ?</CheckboxP>
        </CheckboxMain>
        <SigninButton onClick={ClientSingIn}> {loading ? "SIGNING IN...": "SIGN IN"}</SigninButton>
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
          <AccountButton>{loading ? "SIGNING IN..." : "CREATE ACCOUNT"}</AccountButton>
        </Link>
        <Box sx={{ mt: "10px" }}>
          {message && <Typography color="error">{message}</Typography>}
        </Box>
      </SignChild>
    </SignInMain>
  );
};

export default SignInComp;
