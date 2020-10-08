import React, { useEffect, useState } from 'react';
import {
  Container, Header, Form, Card, Image, Grid, Loader,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Categories from '../../components/categories/categories';
import { searchMentors } from '../../store/actions/userActions';

const FindMentorsScreen = ({
  mentorSearch,
  skills,
  dispatchSearchMentors,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatchSearchMentors('');
  }, [dispatchSearchMentors]);

  const handleOnSearch = () => {
    dispatchSearchMentors(query);
  };

  return (
    <Container>
      <Grid columns="equal">
        <Grid.Column>
          <Header as="h1">Find Mentors</Header>
          <Form onSubmit={handleOnSearch}>
            <Form.Group>
              <Form.Input
                placeholder="Search"
                name="search"
                value={query}
                onChange={(e, { value }) => {
                  setQuery(value);
                }}
              />
              <Form.Button content="Search" color="teal" />
            </Form.Group>
          </Form>
          {mentorSearch.isLoading && (<Loader active inline="centered" />)}
          <Card.Group>
            {mentorSearch.mentors && mentorSearch.mentors.slice(0, 20).map((mentor) => (
              <Card key={mentor.id} as={NavLink} to={`/mentors/${mentor.id}`}>
                <Image
                  src="https://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg"
                  alt="person"
                  wrapped
                  ui={false}
                  size="medium"
                />
                <Card.Content>
                  <Card.Header>{mentor.name}</Card.Header>
                  {mentor.bio && (
                    <Card.Description>{mentor.bio}</Card.Description>
                  )}
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={5}>
          <Categories categories={skills} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  skills: state.skills.skills.items,
  mentorSearch: state.user.mentorSearch,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSearchMentors: (query, skip, limit) => dispatch(searchMentors(query, skip, limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindMentorsScreen);
