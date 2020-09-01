import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Container, Grid, Button, Pagination,
} from 'semantic-ui-react';
import RecentPosts from './recent_posts';
import Categories from './categories';
import Post from './post';
import { getPosts } from '../../store/actions/blogActions';

const BlogScreen = ({
  posts,
  dispatchGetPosts,
}) => {
  const initialState = {
    activePage: 1,
    limit: 5,
  };

  const [blogState, setBlogState] = useState(initialState);

  const recentPosts = [{
    id: '0',
    title: 'Test',
    date: '20 Aug 2020',
  }];

  const categories = [{
    id: '0',
    name: 'Android',
    posts: 255,
  }];

  useEffect(() => {
    dispatchGetPosts();
  }, []);

  const handlePaginationChange = (e, { activePage }) => setBlogState((state) => ({
    ...state,
    activePage,
  }));

  const getPageStart = () => blogState.limit * (blogState.activePage - 1);
  const getPageEnd = () => getPageStart() + blogState.limit;

  return (
    <Container>
      <Grid columns="equal">
        <Grid.Column>
          <Grid.Row>
            {posts.slice(getPageStart(), getPageEnd())
              .map((post) => (
                <Post key={post.id} post={post} />
              ))}
          </Grid.Row>
          <Grid.Row>
            <Pagination
              activePage={blogState.activePage}
              firstItem={null}
              lastItem={null}
              onPageChange={handlePaginationChange}
              totalPages={posts.length / 5}
            />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button as={NavLink} to="/blog/create" primary>Create Post</Button>
          <Categories categories={categories} />
          <RecentPosts posts={recentPosts} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.blog.posts.loading,
  error: state.blog.posts.error,
  posts: state.blog.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
