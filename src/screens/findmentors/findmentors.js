import React from "react";
import { Container, Header, Search, Card, Icon, Image, Grid, Button } from "semantic-ui-react";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import Categories from "../../components/categories/categories";
import RecentPosts from "../blog/components/recent_posts";
import { getPosts } from "../../store/actions/blogActions";
import { connect } from "react-redux";

const FindMentorsScreen = ({
  mentorSearch = {
    isSearching: false,
    results: null,
    mentors: [{
      name: "Jhon",
    }],
    value: ''
  },
  skills
}) => {

  const suggestionSelected = (e, { result }) => {
    console.log(result);
  }

  const handleOnSearch = (e, { value }) => {
    console.log(value)
  }

  return (
    <Container>
      <Grid columns="equal">
        <Grid.Column>
          <Header as={'h1'}>Find Mentors</Header>
          <Header sub>“It’s been true in my life that when I’ve needed a mentor, the right person shows up.” – Ken
            Blanchard</Header>
          <Search
            loading={mentorSearch.searching}
            onResultSelect={suggestionSelected}
            onSearchChange={_.debounce(handleOnSearch, 500, {
              leading: true,
            })}
            results={mentorSearch.results}
            value={mentorSearch.value}
            fluid
          />
          {mentorSearch.mentors.map((mentor) => (
            <Card>
              <Image src='/images/avatar/large/matthew.png' wrapped ui={false}/>
              <Card.Content>
                <Card.Header>{mentor.name}</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user'/>
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          ))}
        </Grid.Column>
        <Grid.Column width={4}>
          <Categories categories={skills}/>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  skills: state.skills.skills.items,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FindMentorsScreen);

