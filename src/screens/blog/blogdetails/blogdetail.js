import React, { Component } from 'react';
import SideNav from '../../../components/sidenav/sidenav_cmp';
import './../blog.css'
class Blogdetail extends Component {
  state = {}
  render() {
    return (
      <div className='container'>
        {/* <SideNav /> */}

        <div className='blogdetails_container_right'>

          {/* Blog Post Content */}
          <div className='blog_post_content'>

            <h2>Post title</h2>

            <img src='../../assets/vectors/blogviewicon.svg' />

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>

            <div className='post_categories'>
              <div className='post_category_label'>
                <p>Catergory type</p>
              </div>
            </div>

            <div className='comments_section'>
              <button>Add Comment</button>
              <button>View Comments</button>
            </div>

          </div>
          {/* End of Blog Post Content */}

          {/* Blog Right Row */}
          <div className="blog_post_right_row">

            <div className="blog_post_catergory">
              <p className="catergory_title2">Related Catergory</p>

              <div className='catergory_types'>
                <div className="catergory_name">
                  <p>Catergory type</p>
                </div>
              </div>

            </div>

            <div className="blog_post_recent_posts">
              <p className="recent_blog_title2">Recent Posts</p>

              <div className='recent_posts_types'>
                <div className="recent_post_title2">
                  <p>post title</p>
                </div>
              </div>

            </div>

          </div>
          {/* End of Blog Right Row */}

        </div>
      </div>
    );
  }
}



export default Blogdetail;