import { Card, Feed } from 'semantic-ui-react';
import React from 'react';

const RecentPosts = ({ posts = [] }) => (
  <Card>
    <Card.Content>
      <Card.Header>Recent Posts</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        {posts.map((post) => (
          <Feed.Event key={post.id}>
            <Feed.Content>
              <Feed.Date content={post.date} />
              <Feed.Summary>
                {post.title}
              </Feed.Summary>
              {/* <Feed.Extra text> */}
              {/*  Ours is a life of constant reruns. */}
              {/* </Feed.Extra> */}
            </Feed.Content>
          </Feed.Event>
        ))}
      </Feed>
    </Card.Content>
  </Card>
);

export default RecentPosts;
