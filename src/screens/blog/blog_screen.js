import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  Container, Grid, Button, Pagination,
} from 'semantic-ui-react';
import RecentPosts from './components/recent_posts';
import Categories from '../../components/categories/categories';
import Post from './components/post';
import { getPosts } from '../../store/actions/blogActions';

const BlogScreen = ({
  user,
  posts,
  skills,
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

  useEffect(() => {
    dispatchGetPosts();
  }, [dispatchGetPosts]);

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
                <NavLink to={`/blog/${post.id}`} key={post.id}>
                  <Post post={post} />
                </NavLink>
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
        <Grid.Column width={5}>
          {user && (
            <Button as={NavLink} to="/blog/edit" color="teal">Create Post</Button>
          )}
          <Categories categories={skills} />
          {/* <RecentPosts posts={recentPosts}/> */}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.blog.posts.loading,
  error: state.blog.posts.error,
  posts: state.blog.posts.posts,
  skills: state.skills.skills.items,
  user: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
