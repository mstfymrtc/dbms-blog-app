import React, { Component } from "react";
import { PostCard } from "../components/PostCard";
import axios from "axios";
import { APP_URL } from "../config/constants";

export default class Author extends Component {
  state = {
    user: {},
    posts: []
  };
  componentDidMount() {
    const { userId } = this.props.match.params;
    axios
      .get(`${APP_URL}/posts/getPostsByUserId/${userId}`)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));

    axios
      .get(`${APP_URL}/users/getUserById/${userId}`)
      .then(res => this.setState({ user: res.data[0] }))
      .catch(err => console.log(err));
  }
  render() {
    const { userId } = this.props.match.params;

    console.log(this.state.posts, this.state.user);
    const { avatarurl, fullname } = this.state.user;
    const { posts } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 col-md-offset-2">
              <div className="mainheading">
                <div className="row post-top-meta authorpage">
                  <div className="col-md-10 col-xs-12">
                    <h1>{fullname}</h1>
                    <span className="author-description">
                      Founder of
                      <a target="_blank" href="https://www.wowthemes.net">
                        WowThemes.net
                      </a>
                      and creator of <strong>"Mediumish"</strong> theme that
                      you're currently previewing. I professionally develop
                      premium themes, templates & scripts since the Apocalypse
                      (2012). You can reach me out on the social links below.
                    </span>
                  </div>
                  <div className="col-md-2 col-xs-12">
                    <img className="author-thumb" src={avatarurl} alt="Sal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="graybg authorpage">
          <div className="container">
            <div className="listrecent listrelated">
              <div className="authorpostbox">
                {posts.map(item => (
                  <div key={item.postid}>
                    <PostCard
                      postId={item.postid}
                      title={item.title}
                      content={item.content}
                      publishDate={item.publishdate}
                      postImageUrl={item.imageurl}
                      authorName={fullname}
                      authorAvatarUrl={avatarurl}
                      authorId={userId}
                    />
                    <br />
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
