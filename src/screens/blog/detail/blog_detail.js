import React, { useEffect } from 'react';
import {
  Button,
  Container, Grid, Header, Image, Label,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';

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
      <Grid columns="equal">
        <Grid.Row>
          <Link to="/blog">← Back to Blog Posts</Link>
        </Grid.Row>

        {!loading && post
          ? (
            <>
              <Grid.Column>
                <Header as="h2">{post.title}</Header>
                <div style={{
                  color: '#3b5266',
                  textAlign: 'justify',
                  textJustify: 'inter-word',
                }}
                >
                  {post.text}
                </div>
              </Grid.Column>
              <Grid.Column width={4}>
                {user && post.createdBy.id === user.id && (
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
            </>
          )
          : <div>Loading</div>}
      </Grid>
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
