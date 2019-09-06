import React from "react";

class LoginForm extends React.Component {
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
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
