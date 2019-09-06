import React from "react";

class SignUpForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={this.props.values.email}
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={this.props.values.password}
            onChange={this.props.onChange}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default SignUpForm;
