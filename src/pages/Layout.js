import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        {/* nav */}

        <nav class="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img src="assets/img/logo.png" alt="logo" />
            </a>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">
                    Posts <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="author.html">
                    Author
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>{this.props.children}</div>

        <div class="container">
          <div class="footer">
            <p class="pull-left">Copyright &copy; 2017 Your Website Name</p>
            <p class="pull-right">
              Mediumish Theme by
              <a target="_blank" href="https://www.wowthemes.net">
                WowThemes.net
              </a>
            </p>
            <div class="clearfix" />
          </div>
        </div>
      </div>
    );
  }
}
export default Layout;
