import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Post from "../pages/Post";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <AppRoute path="/" exact layout={Layout} component={Home} />
            <AppRoute path="/post" layout={Layout} component={Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}
