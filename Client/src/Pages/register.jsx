import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";

import {
  CheckboxInput,
  CheckboxMain,
  CheckboxMainChild,
  CheckboxP,
  Email,
  Inputs,
  SignChild,
  Signin,
  SigninButton,
  SignInMain,
} from "../Styles/signIn";


const SignInComp = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [rePassword, setRepassword] = useState("");

  const AddNewUser = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setMessage("Password doesn't match");
      return;
    } 

    try {
      setLoading(true);
      setMessage("");
      const resData = await fetch(
        "http://localhost:4000/main-client-user/client-auth-add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await resData.json();
      if (resData.ok) {
        alert("Registration is successful");
        navigate("/");
      } else {
        setMessage("Email is already in use");
      }
    } catch (error) {
      console.log("Error while registering", error)
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignInMain>
      <SignChild style={{ height: "650px" }}>
        <Signin>Registrate</Signin>
        <Email>Name</Email>
        <Inputs
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Email>Repeat your password</Email>
        <Inputs
          type="password"
          placeholder="Your password"
          value={rePassword}
          onChange={(e) => setRepassword(e.target.value)}
        />

        <CheckboxMain>
          <CheckboxMainChild>
            <CheckboxInput type="checkbox" />
            <CheckboxP>Keep me logged in</CheckboxP>
          </CheckboxMainChild>
        </CheckboxMain>
        <SigninButton
          onClick={AddNewUser}>
          {loading ? "Registering..." : "Register"}
        </SigninButton>
        <Box sx={{ mt: "7px" }}>
          {message && <Typography color="error">{message}</Typography>}
        </Box>
      </SignChild>
    </SignInMain>
  );
};

export default SignInComp;
