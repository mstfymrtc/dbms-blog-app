import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Author from "../pages/Author";
import Auth from "../pages/Auth";
import CreatePost from "../pages/CreatePost";

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
const EmptyLayout = props => <div>{props.children}</div>;

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <AppRoute path="/" exact layout={Layout} component={Home} />
            <AppRoute path="/post/:postId" layout={Layout} component={Post} />
            <AppRoute
              path="/author/:userId"
              layout={Layout}
              component={Author}
            />
            <AppRoute path="/auth" layout={EmptyLayout} component={Auth} />
            <AppRoute
              path="/create-post"
              layout={Layout}
              component={CreatePost}
            />
            <AppRoute
              path="/edit-post/:postId"
              layout={Layout}
              component={EditPost}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
