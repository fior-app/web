import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../store/actions/blogActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { loading, posts } = this.props;

    if (loading) return <div>loading..</div>;
    return (
      posts
      && posts.map((post) => (
        <div className="blog_content" key={post.id}>
          <div className="blog_item row">
            <div className="rectangle">
              <p className="blog_date">12:00 am</p>
              <div className="blog_card">
                <img
                  className="blog_image"
                  src="../../assets/vectors/blogimage.svg"
                  alt=""
                />
                <div className="blog_card_catergory">
                  <p>Catergory</p>
                  <p className="post_title">{post.title}</p>
                  <p className="content">{post.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.blog.posts.loading,
  posts: state.blog.posts.posts,
  error: state.blog.posts.error,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (post) => dispatch(getPosts(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
