import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <SignInMain>
      <SignChild $register>
        <Signin>Registrate</Signin>
        <Email>Email</Email>
        <Inputs type="text" placeholder="Your email" />
        <Email>Password</Email>
        <Inputs type="text" placeholder="Your password" />
        <Email>Repeat your password</Email>
        <Inputs type="text" placeholder="Your password" />

        <CheckboxMain>
          <CheckboxMainChild>
            <CheckboxInput type="checkbox" />
            <CheckboxP>Keep me logged in</CheckboxP>
          </CheckboxMainChild>
        </CheckboxMain>
        <SigninButton>SIGN IN</SigninButton>
      </SignChild>
    </SignInMain>
  );
};

export default SignInComp;
