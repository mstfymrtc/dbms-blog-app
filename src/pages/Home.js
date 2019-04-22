import React, { Component } from "react";
import { PostCard } from "../components/PostCard";
import axios from "axios";
export default class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/posts/getAllPosts")
      .then(res => this.setState({ posts: res.data }));
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <div className="mainheading">
          <div className="section-title">
            <h2>
              <span>Categories</span>
            </h2>
          </div>
          <div className="after-post-tags">
            <ul className="tags">
              <li>
                <a href="#">All Posts</a>
              </li>

              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Growth Mindset</a>
              </li>
              <li>
                <a href="#">Productivity</a>
              </li>
              <li>
                <a href="#">Personal Growth</a>
              </li>
            </ul>
          </div>
        </div>
        <section className="recent-posts">
          <div className="section-title">
            <h2>
              <span>All Posts</span>
            </h2>
          </div>
          <div className="card-columns listrecent">
            {posts.map(item => (
              <PostCard
                key={item.postid}
                postId={item.postid}
                title={item.title}
                content={item.content}
                publishDate={item.publishdate}
                postImageUrl={item.imageurl}
                authorName={item.fullname}
                authorAvatarUrl={item.avatarurl}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
