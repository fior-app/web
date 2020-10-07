import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const Post = ({ post }) => (
  <div style={{ marginBottom: '2rem' }}>
    <Header as="h2">{post.title}</Header>
    <div>{post.date}</div>
    <Image
      src="../../assets/vectors/blogimage.svg"
      alt=""
    />
    <p>{post.text}</p>
  </div>
);

export default Post;
