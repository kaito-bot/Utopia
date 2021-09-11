import React from "react";
import "./sigup-and-signin-page.styling.scss";
import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from "../../Components/sign-up/sign-up.component";

const SignUpAndSignInPage = () => {
  return (
    <div className="signUp-and-signIn">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignUpAndSignInPage;
