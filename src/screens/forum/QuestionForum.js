import React, { Component } from 'react';
import { connect } from 'react-redux';

export class QuestionForum extends Component {
  render() {
    return (
      <div className="container">
        <div className="forum_header">
          <img className="blogicon" src="../../assets/vectors/questionicon.svg" />
          <img className="blogicon2" src="../../assets/vectors/blogicon2.svg" />
          <img className="blogicon3" src="../../assets/vectors/forumicon3.svg" />
          <img className="blogicon4" src="../../assets/vectors/pageicon.svg" />
          <img className="forumicon5" src="../../assets/vectors/forumicon2.svg" />
          <img className="blogicon6" src="../../assets/vectors/blogicon6.svg" />
          <img className="blogicon7" src="../../assets/vectors/blogicon7.svg" />
        </div>
        <div className="forum_content">
          <div className="forum_item row">
            <div className="forum_card">
              <div className="forum_title">
                {/* <p className='post_title'>Question Title</p> */}
                <p className="contentt">Here is the content</p>
                <p className="forum_by">by John Doe</p>
              </div>
            </div>
          </div>
          <div className="forum_item row">
            <div className="forum_card2">
              <div className="forum_title">
                {/* <p className='post_title'>Question Title</p> */}
                <p className="contentt">Here is the content</p>
                <p className="forum_by">by John Doe</p>
              </div>
            </div>
          </div>
          <div className="forum_item row">
            <div className="forum_card3">
              <div className="forum_title">
                {/* <p className='post_title'>Question Title</p> */}
                <p className="contentt">Here is the content</p>
                <p className="forum_by">by John Doe</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_right_row">
          <div className="blog_catergory">
            <div className="catergory_title">
              <p>Categories</p>
              <div className="catergory_types">
                <p className="cat_name">Category Name</p>
              </div>
              <div className="catergory_types2">
                <p className="cat_name">Category Name</p>
              </div>
              <div className="catergory_types3">
                <p className="cat_name">Category Name</p>
              </div>
              <div className="catergory_types4">
                <p className="cat_name">Category Name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="recent_question">
          <p className="recent_question_heading">Recent Questions</p>
          <div className="recent_question_title">
            <p className="question_title">Question Title : This is the question</p>
          </div>
          <div className="recent_question_title2">
            <p className="question_title">Question Title2 : This is the question</p>
          </div>
          <div className="recent_question_title3">
            <p className="question_title">Question Title3 : This is the question</p>
          </div>
          <div className="recent_question_title4">
            <p className="question_title">Question Title4 : This is the question</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForum);
