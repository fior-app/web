import React, { Component } from "react";
import { connect } from "react-redux";

export class BlogScreen extends Component {
  render() {
    return <div>blog</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
