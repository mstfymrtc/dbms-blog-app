import React, { Component } from "react";
import { PostCard } from "../components/PostCard";
import axios from "axios";
import { APP_URL } from "../config/constants";

export default class Home extends Component {
  state = {
    posts: [],
    categories: [],
    fetching: true,
    filteredPosts: []
  };
  componentDidMount() {
    axios
      .get(`${APP_URL}/posts/getAllPosts`)
      .then(res => this.setState({ posts: res.data, filteredPosts: res.data }));
    axios
      .get(`${APP_URL}/categories/getAllCategories`)
      .then(res => this.setState({ categories: res.data, fetching: false }));
  }
  filterPostByCategory = categoryId => {
    const { categories, posts } = this.state;
    let postsClone = posts;
    let filteredPosts = postsClone.filter(
      item => item.categoryid === categoryId
    );
    this.setState({ filteredPosts });
  };
  render() {
    console.log(this.state.posts);
    const { filteredPosts, categories, fetching, posts } = this.state;
    // console.log(posts);

    if (fetching) {
      return <p>Loading...</p>;
    }
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
              <li style={{ cursor: "pointer" }}>
                <a onClick={() => this.setState({ filteredPosts: posts })}>
                  All
                </a>
              </li>
              {categories.map(item => (
                <li style={{ cursor: "pointer" }} key={item.categoryid}>
                  <a onClick={() => this.filterPostByCategory(item.categoryid)}>
                    {item.name}
                  </a>
                </li>
              ))}
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
            {filteredPosts.map(item => (
              <PostCard
                key={item.postid}
                postId={item.postid}
                title={item.title}
                content={item.content}
                publishDate={item.publishdate}
                postImageUrl={item.imageurl}
                authorName={item.fullname}
                authorAvatarUrl={item.avatarurl}
                authorId={item.userid}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
