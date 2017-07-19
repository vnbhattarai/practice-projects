import React, { Component } from "react";
import App from "./Feathers";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", login: "" };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  //   componentDidMount() {
  //     const reservations = App.service("reservations");
  //     const users = App.service("users");

  // Try to authenticate with the JWT stored in
  //localStorage;
  login(e) {
    e.preventDefault();
    console.log(this);

    App.authenticate({
      strategy: "local",
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log("Authenticated!", response);
        return App.passport.verifyJWT(response.accessToken);
      })
      .then(payload => {
        console.log("JWT Payload", payload);
        return App.service("users").get(payload.userId);
      })
      .then(user => {
        App.set("user", user);
        console.log("User", App.get("user"));
      })
      .catch(function(error) {
        console.error("Error authenticating!", error);
        this.setState({ login: null });
      });
  }

  logout(e) {
    e.preventDefault();
    App.logout().then(console.log(`You've been logged out !!`));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.login}>
          <div className="row">
            <div className="input-field">
              <input
                type="email"
                className="validate"
                onChange={this.handleEmailChange}
                value={this.state.email}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input
                type="password"
                className="validate"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder="password"
              />
            </div>
          </div>
          <div className="row">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="row">
          <button className="btn" type="submit" onClick={this.logout}>
            Log out
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
