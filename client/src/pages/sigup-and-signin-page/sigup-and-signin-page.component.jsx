import React from "react";
import "./sigup-and-signin-page.styling.scss";
import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from "../../Components/sign-up/sign-up.component";
import Media from "react-media";
import { useHistory } from "react-router";
const SignUpAndSignInPage = () => {
  const history = useHistory();
  return (
    <div className="signin-page">
      <div>
        <Media
          query="(max-width: 800px)"
          render={() => (
            <div className="signUp-and-signIn-responsive">
              <button
                className="signIn-responsive "
                onClick={() => {
                  
                  history.push("/signinresp");
                }}
              >
                SIGN IN
              </button>

              <button
                className="signUp-responsive"
                onClick={() => {
                  
                  history.push("/signupresp");
                }}
              >
                SIGN UP
              </button>
            </div>
          )}
        />
      </div>

      <Media
        query="(min-width: 801px)"
        render={() => (
          <div className="signUp-and-signIn">
            <SignIn />
            <SignUp />
          </div>
        )}
      />
    </div>
  );
};

export default SignUpAndSignInPage;
