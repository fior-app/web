import React, { Component } from "react";
import { connect } from "react-redux";

export class QuestionForum extends Component {
    render() {
      return <div className='container'>
        <div className='forum_header'>
            <img className='blogicon'  src='../../assets/vectors/questionicon.svg' />
            <img className="blogicon2"  src='../../assets/vectors/blogicon2.svg' /> 
            <img className="blogicon3"  src='../../assets/vectors/forumicon3.svg' /> 
            <img className="blogicon4"  src='../../assets/vectors/pageicon.svg' /> 
            <img className="forumicon5"  src='../../assets/vectors/forumicon2.svg' />
            <img className="blogicon6"  src='../../assets/vectors/blogicon6.svg' />
            <img className="blogicon7"  src='../../assets/vectors/blogicon7.svg' />
        </div>
        <div className='forum_content'>
            <div className='forum_item row'>
                <div className='forum_card'>
                    <div className='forum_title'>
                        {/* <p className='post_title'>Question Title</p> */}
                        <p className='contentt'>Here is the content</p>
                        <p className='forum_by'>by John Doe</p>
                    </div>
                </div>
            </div>
            <div className='forum_item row'>
                <div className='forum_card2'>
                    <div className='forum_title'>   
                        {/* <p className='post_title'>Question Title</p> */}
                        <p className='contentt'>Here is the content</p>
                        <p className='forum_by'>by John Doe</p>
                    </div>
                </div>
            </div>
            <div className='forum_item row'>
                <div className='forum_card3'>
                    <div className='forum_title'>
                        {/* <p className='post_title'>Question Title</p> */}
                        <p className='contentt'>Here is the content</p>
                        <p className='forum_by'>by John Doe</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForum);