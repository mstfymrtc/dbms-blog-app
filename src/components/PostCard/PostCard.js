import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PostCard extends Component {
  render() {
    const {
      postId,
      title,
      content,
      publishDate,
      postImageUrl,
      authorName,
      authorAvatarUrl
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
          <h4 className="card-text">
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
              <span className="post-read-more">
                <a href="post.html" title="Read Story">
                  <svg
                    className="svgIcon-use"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
