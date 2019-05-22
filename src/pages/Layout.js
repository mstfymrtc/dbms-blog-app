import React, { Component } from "react";
var Cookies = require("js-cookie");

class Layout extends Component {
  handleSignOut = () => {
    let currentlyLoggedInUserId = Cookies.get("currentlyLoggedInUserId");
    if (currentlyLoggedInUserId) {
      //logout
      Cookies.remove("currentlyLoggedInUserId");
    }
    window.location.replace("/auth");
  };
  render() {
    return (
      <div>
        {/* nav */}

        <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/assets/img/logo.png" alt="logo" />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Posts <span className="sr-only">(current)</span>
                  </a>
                </li> */}

                {Cookies.get("currentlyLoggedInUserId") ? (
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={`/author/${Cookies.get("currentlyLoggedInUserId")}`}
                    >
                      Profile
                    </a>
                  </li>
                ) : null}

                {Cookies.get("currentlyLoggedInUserId") ? (
                  <li className="nav-item">
                    <a
                      onClick={() => window.location.replace("/create-post")}
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      // href="author.html"
                    >
                      <i
                        style={{ color: "green" }}
                        className="fas fa-lg fa-paper-plane"
                      />
                    </a>
                  </li>
                ) : null}

                {Cookies.get("currentlyLoggedInUserId") ? (
                  <li className="nav-item">
                    <a
                      onClick={() => this.handleSignOut()}
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      // href="author.html"
                    >
                      <i
                        // style={{ color: "green" }}
                        className="fas fa-lg fa-power-off"
                      />{" "}
                    </a>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a
                      onClick={() => window.location.replace("/auth")}
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      // href="author.html"
                    >
                      Sign In
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div>{this.props.children}</div>

        <div className="container">
          <div className="footer">
            <p className="pull-left">Copyright &copy; 2017 Your Website Name</p>
            <p className="pull-right">
              Mediumish Theme by
              <a target="_blank" href="https://www.wowthemes.net">
                WowThemes.net
              </a>
            </p>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    );
  }
}
export default Layout;
