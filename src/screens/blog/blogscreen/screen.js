import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';


const BlogScreen = ({
  posts,
  skills,
  dispatchGetPosts,
}) => {
      const initialState={
          activePage: 1,
          limit: 5,

      };
  }

  const [blogState, setBlogState]= useState(initialState);
  const [blogState, setBlogState]= useState(initialState);
  

  
  const getPageStart = () => blogState.limit * (blogState.activePage - 1);
  const getPageEnd = () => getPageStart() + blogState.limit;
  
  return (
    <Container>

      <Grid columns="equal">
        <Grid.Column>
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
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.blog.posts.loading,
  error: state.blog.posts.error,
  posts: state.blog.posts.posts,
  skills: state.skills.skills.items,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetPosts: () => dispatch(getPosts()),
});



export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
