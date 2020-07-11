import React, { Component } from "react";
import { connect } from "react-redux";
import WriteBlogScreen from "./WriteBlogScreen";
import Posts from "./Posts";

export class BlogScreen extends Component {
  render() {
    return (
      <div className="container">
        <div className="blog_header">
          <img className="blogicon" src="../../assets/vectors/blogicon.svg" />
          <img className="blogicon7" src="../../assets/vectors/blogicon7.svg" />
          <img className="blogicon2" src="../../assets/vectors/blogicon2.svg" />
          <img className="blogicon5" src="../../assets/vectors/blogicon5.svg" />
          <img className="blogicon6" src="../../assets/vectors/blogicon6.svg" />
          <img className="blogicon4" src="../../assets/vectors/blogicon4.svg" />
          <img className="blogicon3" src="../../assets/vectors/blogicon3.svg" />
        </div>

        <div style={{ marginTop: "550px", position: "absolute" }}>
          <WriteBlogScreen />
        </div>

        <Posts />

        {/* <div className="blog_content">
          <div className="blog_item row">
            <div className="rectangle">
              <p className="blog_date">date of post</p>
              <div className="blog_card">
                <img
                  className="blog_image"
                  src="../../assets/vectors/blogimage.svg"
                />
                <div className="blog_card_catergory">
                  <p>Catergory</p>
                  <p className="post_title">Post title</p>
                  <p className="content">Here is the content of the blog</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="blog_right_row">
          <div className="blog_catergory">
            <div className="catergory_title">
              <p>Catergory</p>
              <div className="catergory_group1">
                <div className="catergory_types">
                  <p className="cat_name">Catergory type </p>
                </div>
              </div>
            </div>
          </div>

          <div className="resent_post">
            <p className="resent_post_heading">Resent posts</p>
            <div className="resent_post_title">
              <p className="post_title">Post title</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
