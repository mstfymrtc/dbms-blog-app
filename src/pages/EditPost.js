import React, { Component } from "react";
import "../styles/create-post.css";
import axios from "axios";
import { APP_URL } from "../config/constants";

var Cookies = require("js-cookie");

export default class EditPost extends Component {
  state = {
    categories: [],
    selectedCategoryId: "",
    title: "",
    content: "",
    fetching: true
  };
  componentDidMount() {
    const { postId } = this.props.match.params;
    axios.get(`${APP_URL}/categories/getAllCategories`).then(postRes =>
      // this.setState({ categories: res.data }

      axios.get(`${APP_URL}/posts/getPostById/${postId}`).then(res =>
        this.setState({
          title: res.data[0].title,
          content: res.data[0].content,
          //   selectedCategoryId: res.data[0].categoryid,
          categories: postRes.data,
          fetching: false
        })
      )
    );
  }

  handleEditPostRequest = () => {
    const { selectedCategoryId, title, content } = this.state;
    const { postId } = this.props.match.params;

    if (selectedCategoryId && title && content) {
      axios
        .post(`${APP_URL}/posts/updatePost`, {
          title,
          content,
          categoryid: selectedCategoryId,
          postid: postId
        })
        .then(function(response) {
          console.log("responseeeee!!", response);
          alert("Post updated succesfully!");
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      alert("Please fill in all fields!");
    }
  };

  render() {
    if (this.state.fetching) {
      return <p>Loading...</p>;
    }
    const { categories, title, content } = this.state;
    console.log(this.state);
    return (
      <div>
        <div className="create-post-container container">
          <div>
            <label htmlFor="fname">Title</label>
            <input
              className="inputTextStyle"
              type="text"
              id="fname"
              name="firstname"
              placeholder="Write something..."
              value={title}
              onChange={el => this.setState({ title: el.target.value })}
            />

            {/* <label for="lname"></label>
            <input
              className="inputTextStyle"
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            /> */}

            <label htmlFor="country">Category</label>
            <select
              onChange={el =>
                this.setState({ selectedCategoryId: el.target.value })
              }
              className="inputTextStyle"
              id="country"
              name="country"
            >
              <option value={null}>Please select category...</option>

              {categories.map(item => (
                <option key={item.categoryid} value={item.categoryid}>
                  {item.name}
                </option>
              ))}
            </select>

            <label htmlFor="subject">Content</label>
            <textarea
              className="inputTextStyle"
              //   style={{ height: "50vh" }}
              rows={20}
              id="subject"
              name="subject"
              placeholder="Add some mystery..."
              onChange={el => this.setState({ content: el.target.value })}
              value={content}

              //   style="height:200px"
            />

            <input
              disabled={Cookies.get("currentlyLoggedInUserId") ? false : true}
              className="inputSubmitStyle"
              type="submit"
              value="Submit"
              onClick={() => this.handleEditPostRequest()}
            />
          </div>
        </div>
      </div>
    );
  }
}
