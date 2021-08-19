import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ email: "", password: "" });
    };
    const handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
    return (
      <div className="SignIn">
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={handleChange}
            required
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
