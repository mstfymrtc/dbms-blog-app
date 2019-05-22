import React, { Component } from "react";
import "../styles/auth.css";
import axios from "axios";
import { APP_URL } from "../config/constants";
var Cookies = require("js-cookie");

export default class Auth extends Component {
  state = {
    inSignInMode: true,
    inSignUpMode: false,
    signInInfo: {
      email: "",
      password: ""
    },
    signUpInfo: {
      fullName: "",
      email: "",
      password: ""
    }
  };

  switchModes = () => {
    this.setState(prevState => ({
      inSignInMode: !prevState.inSignInMode,
      inSignUpMode: !prevState.inSignUpMode
    }));
  };
  handleSignInChange = e => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      signInInfo: {
        ...prevState.signInInfo,
        [e.target.name]: e.target.value
      }
    }));
  };
  handleSignUpChange = e => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      signUpInfo: {
        ...prevState.signUpInfo,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleSignIn = () => {
    axios
      .post(`${APP_URL}/users/signin`, {
        email: this.state.signInInfo.email,
        password: this.state.signInInfo.password
      })
      .then(res => {
        console.log("signInResult:", res);
        if (res.data.canLogin) {
          Cookies.set("currentlyLoggedInUserId", res.data.userid);
          this.props.history.push("/");
        } else {
          alert("Wrong email or password!");
        }
      })
      .catch(err => console.log(err));
  };

  handleSignUp = () => {
    const { email, password, fullName } = this.state.signUpInfo;
    if (email && password && fullName) {
      axios
        .post(`${APP_URL}/users/signup`, {
          email: this.state.signUpInfo.email,
          password: this.state.signUpInfo.password,
          fullName: this.state.signUpInfo.fullName,
          avatarUrl: "https://avatarfiles.alphacoders.com/132/thumb-132712.jpg "
        })
        .then(res => {
          console.log("signInResult:", res);
          if (res.data.signUpSuccessful) {
            alert("Sign up successfull!");
          }
        })
        .catch(err => console.log(err.error));
    } else {
      alert("All fields are required!");
    }
  };

  render() {
    console.log("ben sign in", this.state.signInInfo);
    console.log("ben sign up", this.state.signUpInfo);

    return (
      <div className="login-main-wrap">
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              checked={this.state.inSignInMode}
              onChange={() => this.switchModes()}
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input
              id="tab-2"
              type="radio"
              name="tab"
              className="sign-up"
              checked={this.state.inSignUpMode}
              onChange={() => this.switchModes()}
            />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="email" className="label">
                    E-mail
                  </label>
                  <input
                    value={this.state.signInInfo.email}
                    onChange={e => this.handleSignInChange(e)}
                    id="email"
                    name="email"
                    type="text"
                    className="input"
                    datatype="email"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={this.state.signInInfo.password}
                    onChange={e => this.handleSignInChange(e)}
                    className="input"
                    data-type="password"
                  />
                </div>

                <div className="group">
                  <input
                    type="submit"
                    onClick={() => this.handleSignIn()}
                    className="button"
                    value="Sign In"
                  />
                </div>
              </div>

              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="fullName" className="label">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={this.state.signUpInfo.fullName}
                    onChange={e => this.handleSignUpChange(e)}
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    onChange={e => this.handleSignUpChange(e)}
                    value={this.state.signUpInfo.password}
                    id="password"
                    name="password"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>

                <div className="group">
                  <label htmlFor="pass" className="label">
                    Email Address
                  </label>
                  <input
                    onChange={e => this.handleSignUpChange(e)}
                    name="email"
                    id="email"
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    onClick={() => this.handleSignUp()}
                    className="button"
                    value="Sign Up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {};
