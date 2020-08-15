import React, { Component } from 'react';
import { connect } from 'react-redux';

import { writeBlog, clearWritePost } from '../../store/actions/blogActions';

export class WriteBlogScreen extends Component {
  state = {
    title: '',
    text: '',
    skills: [],
  };

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  componentWillUnmount() {
    this.props.clearWritePost();
  }

  handlePost = () => {
    this.props.writeBlog(this.state);
  };

  render() {
    const { loading, success, error } = this.props;

    return (
      <div>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleOnChangeInput}
        />
        <input
          type="text"
          id="text"
          placeholder="text"
          value={this.state.text}
          onChange={this.handleOnChangeInput}
        />
        {loading ? 'Posting' : null}
        {success ? 'Post added successfully' : null}
        <button onClick={this.handlePost}>submit</button>
        {error ? JSON.stringify(error) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.blog.writePost.loading,
  success: state.blog.writePost.success,
  error: state.blog.writePost.error,
});

const mapDispatchToProps = (dispatch) => ({
  writeBlog: (post) => dispatch(writeBlog(post)),
  clearWritePost: () => dispatch(clearWritePost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WriteBlogScreen);
