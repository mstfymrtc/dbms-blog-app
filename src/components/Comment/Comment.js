import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    const {
      publishDate,
      commenterId,
      commentContent,
      commenterAvatarUrl,
      fullName
    } = this.props;
    return (
      <li className="comment">
        <div className="vcard">
          <img src={commenterAvatarUrl} alt="Image placeholder" />
        </div>
        <div className="comment-body">
          <h3>{fullName}</h3>
          <div className="meta">
            {publishDate ? publishDate.slice(0, 10) : ""}
          </div>
          <p>{commentContent}</p>
        </div>
      </li>
    );
  }
}
