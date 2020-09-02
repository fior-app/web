import React from 'react';
import {
  Container, Grid, Header, Image,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPost } from '../../../store/actions/blogActions';

// import styles from '../../../styles/blog.module.css';

const BlogDetail = ({
  loading,
  error,
  post,
}) => (
  <Container>
    <Grid columns="equal">
      <Grid.Column>
        <Header as="h2">Post title</Header>
        <Image src="../../assets/vectors/blogviewicon.svg" alt="" />
        <p />
        <div className="post_categories">
          <div className="post_category_label">
            <p>Catergory type</p>
          </div>
        </div>
        <div className="comments_section">
          <button type="button">Add Comment</button>
          <button type="button">View Comments</button>
        </div>
      </Grid.Column>
      <Grid.Column width={4}>
        <div className="blog_post_catergory">
          <p className="catergory_title2">Related Catergory</p>

          <div className="catergory_types">
            <div className="catergory_name">
              <p>Catergory type</p>
            </div>
          </div>

        </div>

        <div className="blog_post_recent_posts">
          <p className="recent_blog_title2">Recent Posts</p>
          <div className="recent_posts_types">
            <div className="recent_post_title2">
              <p>post title</p>
            </div>
          </div>
        </div>
      </Grid.Column>
    </Grid>
  </Container>
);

const mapStateToProps = (state) => ({
  loading: state.blog.post.loading,
  error: state.blog.post.error,
  post-: state.blog.post.post,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetPost: (postId) => dispatch(getPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
