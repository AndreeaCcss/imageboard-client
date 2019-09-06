import React from "react";
import SignUpForm from "./LoginForm";
import request from "superagent";

const baseUrl = "http://localhost:4000";

class SignUpFormContainer extends React.Component {
  state = { email: "", password: "" };

  signUp = (email, password) => {
    request
      .post(`${baseUrl}/user`)
      .send({ email, password })
      .then(() => {
        alert("Now log in");
      });
  };
  onSubmit = event => {
    event.preventDefault();
    this.signUp(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default SignUpFormContainer;
