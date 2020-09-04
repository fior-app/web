import React from "react";
import { Container, Header, Search } from "semantic-ui-react";
import _ from "lodash";

const FindMentorsScreen = ({
  mentorSearch = {
    isSearching: false,
    results: null,
    value: ''
  }
}) => {

  const suggestionSelected = (e, { result }) => {
    console.log(result);
  }

  const handleOnSearch = (e, { value }) => {
    console.log(value)
  }

  return (
    <Container>
      <Header as={'h1'}>Find Mentors</Header>
      <Header sub>“It’s been true in my life that when I’ve needed a mentor, the right person shows up.” – Ken Blanchard</Header>
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
    </Container>
  );
}

export default FindMentorsScreen;
