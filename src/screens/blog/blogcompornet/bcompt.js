import React, { useEffect } from 'react';
import {
  Button,
  Container, Grid, Header, Image, Label,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';

import { getPost, deleteBlogPost } from '../../../store/actions/blogActions';

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