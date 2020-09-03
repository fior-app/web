import React, { useEffect } from 'react';
import {
  Button,
  Container, Grid, Header, Image, Label,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import { getPost, deleteBlogPost } from '../../../store/actions/blogActions';

// import styles from '../../../styles/blog.module.css';

const BlogDetail = (
  {
    loading,
    post,
    dispatchGetPost,
    dispatchDeletePost,
    user,
  },
) => {
  const { postId } = useParams();

  useEffect(() => {
    dispatchGetPost(postId);
  }, [postId, dispatchGetPost]);

  const handleDelete = () => {
    dispatchDeletePost(postId);
  };

  return (
    <Container>
      {!loading && post
        ? (
          <Grid columns="equal">
            <Grid.Column>
              <Header as="h2">{post.title}</Header>
              <Image src="../../assets/vectors/blogviewicon.svg" alt="" />
              <p>{post.text}</p>
              <div className="comments_section">
                <Header as="h4">Comments</Header>
                <button type="button">Add Comment</button>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              {post.createdBy.id === user.id && (
                <>
                  <Button as={NavLink} to={`/blog/edit/${post.id}`} primary>Edit Post</Button>
                  <Button onClick={handleDelete} negative>Delete Post</Button>
                </>
              )}
              <Header as="h4">Categories</Header>

              {post.skills.map((skill) => (
                <Label key={skill.id}>
                  {skill.name}
                </Label>
              ))}
            </Grid.Column>
          </Grid>
        )
        : <div>Loading</div>}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.blog.post.loading,
  error: state.blog.post.error,
  post: state.blog.post.post,
  user: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetPost: (postId) => dispatch(getPost(postId)),
  dispatchDeletePost: (postId) => dispatch(deleteBlogPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
