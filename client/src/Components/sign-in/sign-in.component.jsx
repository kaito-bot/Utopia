import React, { useState } from "react";
import "./sign-in.styling.scss";
import FormInput from "../form-input/formInput.component";
import CustomButton from "../custom-button/customButton.component";
import "../../firebase/firebase.utils";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      alert("incorrect email or password");
    }
    setUserCredentials({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="SignIn">
      <h1>I already have an account</h1>
      <h2>Sign in with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="button">
          <CustomButton type="submit" onClick={handleSubmit}>
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
