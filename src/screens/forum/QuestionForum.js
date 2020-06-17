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
    </div>
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForum);