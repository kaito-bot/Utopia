import React, { Component } from "react";
import "./sign-up.styling.scss";
import FormInput from "../form-input/formInput.component";
import CustomButton from "../custom-button/customButton.component";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { displayName, email, password, confirmPassword } = this.state;
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      } else {
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
          await createUserProfileDoc(user, displayName);
          this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    const handleChange = async (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signUp">
        <h1 className="title">Don't have an account</h1>
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
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
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm password"
            required
          />
          <CustomButton>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
