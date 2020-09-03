import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {Container, Grid, Pagination} from "semantic-ui-react";
import {Link} from "react-router-dom";

import Post from "../components/post";
import {getMyPosts} from "../../../store/actions/blogActions";

const MyPostsScreen = ({
  loading,
  error,
  posts,
  dispatchGetMyPosts,
}) => {
  const initialState = {
    activePage: 1,
    limit: 5,
  };

  const [myPostsState, setMyPostsState] = useState(initialState);

  useEffect(() => {
    dispatchGetMyPosts();
  }, [dispatchGetMyPosts]);

  const handlePaginationChange = (e, {activePage}) => setMyPostsState((state) => ({
    ...state,
    activePage,
  }));

  const getPageStart = () => myPostsState.limit * (myPostsState.activePage - 1);
  const getPageEnd = () => getPageStart() + myPostsState.limit;

  return (
    <Container>
      <Grid columns="equal">
        <Grid.Column>
          <Grid.Row>
            {posts.slice(getPageStart(), getPageEnd())
              .map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <Post post={post}/>
                </Link>
              ))}
          </Grid.Row>
          <Grid.Row>
            <Pagination
              activePage={myPostsState.activePage}
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
}

const mapStateToProps = (state) => ({
  loading: state.blog.myPosts.loading,
  error: state.blog.myPosts.error,
  posts: state.blog.myPosts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetMyPosts: () => dispatch(getMyPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsScreen);
