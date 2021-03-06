import React from 'react';
import { Card } from 'semantic-ui-react';

const Post = ({ post }) => (
  <div style={{ marginBottom: '2rem' }}>
    <Card fluid>
      {/* <Image src="https://petapixel.com/assets/uploads/2017/03/samplejpeg.jpg" wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header as="h2">{post.title}</Card.Header>
        <div>{post.date}</div>
        <Card.Description>
          <div style={{
            color: '#3b5266',
            textAlign: 'justify',
            textJustify: 'inter-word',
          }}
          >
            {post.text.length < 100 ? post.text : `${post.text.substr(0, 100)}...`}
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default Post;
