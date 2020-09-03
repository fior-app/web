import {
  Card, Label,
} from 'semantic-ui-react';
import React from 'react';

const Categories = ({ categories = [] }) => (
  <Card>
    <Card.Content>
      <Card.Header>Categories</Card.Header>
    </Card.Content>
    <Card.Content>
      {categories.map((category) => (
        <Label key={category.id}>
          {category.name}
          <Label.Detail>{category.posts}</Label.Detail>
        </Label>
      ))}
    </Card.Content>
  </Card>
);

export default Categories;
