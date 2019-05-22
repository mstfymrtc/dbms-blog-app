import React, { Component } from "react";
import { Link } from "react-router-dom";
import { APP_URL } from "../../config/constants";
import axios from "axios";
var Cookies = require("js-cookie");

export default class PostCard extends Component {
  handleDelete = () => {
    let answer = window.confirm("Are you sure want to delete this post?");
    if (answer) {
      //some code
      // deletePostById
      const { postId } = this.props;

      axios
        .get(`${APP_URL}/posts/deletePostById/${postId}`)
        .then(res => {
          alert("Post deleted successfully");
          window.location.reload();
        })
        .catch(err => console.log(err));
    }
  };
  handleEdit = () => {
    const { postId } = this.props;

    window.location.replace(`edit-post/${postId}`);
  };
  render() {
    const {
      postId,
      title,
      content,
      publishDate,
      postImageUrl,
      authorName,
      authorAvatarUrl,
      authorId
    } = this.props;

    return (
      <div className="card">
        <Link to={`/post/${postId}`}>
          <img className="img-fluid" src={postImageUrl} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to={`/post/${postId}`}>{title}</Link>
          </h2>
          <h4
            style={{
              wordWrap: "break-word",
              minHeight: "15vh",
              maxHeight: "40vh"
            }}
            className="card-text"
          >
            {content ? content.slice(0, 129) : ""}...
          </h4>
          <div className="metafooter">
            <div className="wrapfooter">
              <span className="meta-footer-thumb">
                <Link to="/author">
                  <img
                    className="author-thumb"
                    src={authorAvatarUrl}
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="post-name">
                  <Link to="/author">{authorName}</Link>
                </span>
                <br />
                <span className="post-date">
                  {publishDate ? publishDate.slice(0, 10) : ""}
                </span>
              </span>

              {Cookies.get("currentlyLoggedInUserId") === authorId ? (
                <span className="post-read-more">
                  <a onClick={() => this.handleDelete()} title="Read Story">
                    <i
                      style={{ cursor: "pointer" }}
                      className="fas fa-trash fa-2x"
                    />
                  </a>
                </span>
              ) : null}

              {Cookies.get("currentlyLoggedInUserId") === authorId ? (
                <span className="post-read-more">
                  <a onClick={() => this.handleEdit()} title="Read Story">
                    <i
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      className="fas fa-edit fa-2x"
                    />
                  </a>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
