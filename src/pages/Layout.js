import React, { Component } from "react";

class Layout extends Component {
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
              <img src="assets/img/logo.png" alt="logo" />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Posts <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="author.html">
                    Author
                  </a>
                </li>
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
