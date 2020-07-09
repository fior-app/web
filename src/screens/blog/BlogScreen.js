import React, { Component } from "react";
import { connect } from "react-redux";

export class BlogScreen extends Component {
  render() {
    return <div className='container'>
      <div className='blog_header'>
        <img src='../../assets/blogicon.svg' />
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
