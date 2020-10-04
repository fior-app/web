import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container, Grid, Button, Pagination,Card,Feed, 
} from 'semantic-ui-react';
import { getQuestions } from "../../store/actions/questionActions";

class QuestionScreen extends Component {
  state = {};

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const { questions } = this.props;
    console.log(questions);

    return (
    <Container>
      <Grid >
      <Grid.Column width={10}>
        {questions && questions.map((question) => (
          <Card fluid onClick={() => this.handleQuestionClick(question.id)}>
          <Card.Content>
            <Card.Header>{question.title}</Card.Header>
            <Card.Description>
              {question.description.length < 100 ? question.description : question.description.substr(1, 100) + "..."}
            </Card.Description>
            <Card.Meta textAlign={"right"}>3rd Oct 2020</Card.Meta>
          </Card.Content>
          </Card>
        ))}
      </Grid.Column>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={5}>
        <Grid.Row top="2">
          <Button onClick={this.handleQuestionCreate} primary>
            Add Question
          </Button> <br/> <br/>
        </Grid.Row>
        <Grid.Row>   
          <Card>
            <Card.Content>
              <Card.Header>Categories</Card.Header>
            </Card.Content>
            <Card.Content>
            {/* {categories.map((category) => (
              <Label key={category.id}>
                {category.name}
              </Label>
            ))} */}
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Recent Posts</Card.Header>
            </Card.Content>
            <Card.Content>
              {/* <Feed>
              {posts.map((post) => (
                <Feed.Event key={post.id}>
                  <Feed.Content>
                    <Feed.Date content={post.date} />
                    <Feed.Summary>
                      {post.title}
                    </Feed.Summary>
                    <Feed.Extra text>
                       Ours is a life of constant reruns.
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              ))}
              </Feed> */}
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid.Column>  
      </Grid>  
    </Container>
    );
  }

  handleQuestionCreate = () => {
    this.props.history.push("/question-forum/create");
  };

  handleQuestionClick = (id) => {
    this.props.history.push(`/question-forum/${id}`);
  }

  handleAnswerCreate = (id) => {
    this.props.history.push(`/question-forum/${id}`);
  }
}

const mapStateToProps = (state) => ({
  questions: state.question.questions,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(getQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
