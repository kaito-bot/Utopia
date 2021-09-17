import React, { Component } from "react";
import "./sign-in.styling.scss";
import FormInput from "../form-input/formInput.component";
import CustomButton from "../custom-button/customButton.component";
import "../../firebase/firebase.utils";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { email, password } = this.state;
      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.log(error);
      }
      this.setState({ email: "", password: "" });
    };
    const handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
    return (
      <div className="SignIn">
        <h1>I already have an account</h1>
        <h2>Sign in with your email and password</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={this.state.email}
            handleChange={handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={handleChange}
            label="Password"
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
