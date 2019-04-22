import React, { Component } from "react";
import { PostCard } from "../components/PostCard";
export default class Author extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 col-md-offset-2">
              <div className="mainheading">
                <div className="row post-top-meta authorpage">
                  <div className="col-md-10 col-xs-12">
                    <h1>Mustafa Yumurtacı</h1>
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
                    <img
                      className="author-thumb"
                      src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                      alt="Sal"
                    />
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
                <PostCard />
                <br />
                <PostCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
