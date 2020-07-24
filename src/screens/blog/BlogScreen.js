import React, { Component } from "react";
import { connect } from "react-redux";
import "./blog.css";

export class BlogScreen extends Component {
  render() {
    return (
      <div className='container'>
        {/* <SideNav /> */}

        <div className='blog_container_right'>
          {/* Blog Header */}
          <div className='blog_header'>
            <img
              className='blogicon'
              src='../../assets/vectors/blogicon.svg'
              alt='design'
            />
            <img
              className='blogicon7'
              src='../../assets/vectors/blogicon7.svg'
              alt='design'
            />
            <img
              className='blogicon2'
              src='../../assets/vectors/blogicon2.svg'
              alt='design'
            />
            <img
              className='blogicon5'
              src='../../assets/vectors/blogicon5.svg'
              alt='design'
            />
            <img
              className='blogicon6'
              src='../../assets/vectors/blogicon6.svg'
              alt='design'
            />
            <img
              className='blogicon4'
              src='../../assets/vectors/blogicon4.svg'
              alt='design'
            />
            <img
              className='blogicon3'
              src='../../assets/vectors/blogicon3.svg'
              alt='design'
            />
          </div>
          {/* End of Blog Header */}

          {/* <div style={{ marginTop: "550px", position: "absolute" }}>
          <WriteBlogScreen />
        </div>

        <Posts /> */}

          {/* Blog Content */}
          <div className='blog_content'>
            {/* Mid Col Blog Items */}
            <div className='blog_items_col'>
              {/* Blog Item Row */}
              <div className='blog_item'>
                {/* Blog Date */}
                <div className='blog_date_bg'>
                  <p className='blog_date'>date of post</p>
                </div>
                {/* End of Blog Date */}

                {/* Blog Card */}
                <div className='blog_card'>
                  <img
                    className='blog_image'
                    src='../../assets/vectors/blogimage.svg'
                    alt='desgin'
                  />
                  <div className='blog_card_catergory'>
                    <p>Catergory</p>
                    <p className='post_title'>Post title</p>
                    <p className='post_meta'>Here is the content of the blog</p>
                    <p className='post_author'>Author</p>
                  </div>
                </div>
                {/* End of Blog Card */}
              </div>
              {/* End of Blog Item Row */}

              {/* Blog Item Row */}
              <div className='blog_item'>
                {/* Blog Date */}
                <div className='blog_date_bg'>
                  <p className='blog_date'>date of post</p>
                </div>
                {/* End of Blog Date */}

                {/* Blog Card */}
                <div className='blog_card'>
                  <img
                    className='blog_image'
                    src='../../assets/vectors/blogimage.svg'
                    alt='desgin'
                  />
                  <div className='blog_card_catergory'>
                    <p>Catergory</p>
                    <p className='post_title'>Post title</p>
                    <p className='post_meta'>Here is the content of the blog</p>
                    <p className='post_author'>Author</p>
                  </div>
                </div>
                {/* End of Blog Card */}
              </div>
              {/* End of Blog Item Row */}

              {/* Blog Item Row */}
              <div className='blog_item'>
                {/* Blog Date */}
                <div className='blog_date_bg'>
                  <p className='blog_date'>date of post</p>
                </div>
                {/* End of Blog Date */}

                {/* Blog Card */}
                <div className='blog_card'>
                  <img
                    className='blog_image'
                    src='../../assets/vectors/blogimage.svg'
                    alt='desgin'
                  />
                  <div className='blog_card_catergory'>
                    <p>Catergory</p>
                    <p className='post_title'>Post title</p>
                    <p className='post_meta'>Here is the content of the blog</p>
                    <p className='post_author'>Author</p>
                  </div>
                </div>
                {/* End of Blog Card */}
              </div>
              {/* End of Blog Item Row */}
            </div>
            {/* End of Mid Col Blog Items */}

            {/* Right Nav */}
            <div className='blog_right_row'>
              <button className='icon_btn secondary_btn'>
                <img src='../../assets/icons/add.svg' alt='desgin' />
                Create new post
              </button>

              <div className='blog_catergory'>
                <p className='catergory_title1'>Catergory</p>

                <div className='catergory_types'>
                  <div className='catergory_name'>
                    <p>Catergory type</p>
                  </div>
                </div>
              </div>

              <div className='blog_recent_posts'>
                <p className='recent_blog_title1'>Recent Posts</p>

                <div className='recent_posts_types'>
                  <div className='recent_post_title1'>
                    <p>post title</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Right Nav */}
          </div>
          {/* End of Blog Content */}

          {/* Pagination */}
          <div className='pagination'>
            <div className='pagination_content'>
              <button>Prev</button>
              <input type='number' />
              <button>Next</button>
            </div>
          </div>
          {/* End of Pagination */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
