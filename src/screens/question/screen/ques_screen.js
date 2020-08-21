import React, { Component } from "react";
import {
  Container, Grid, Button, Pagination,Card,Feed, Header, 
} from 'semantic-ui-react';
import { getQuestions } from "../../store/actions/questionActions";
import styles from '../../styles/question.module.css' ;

class QuestionScreen extends Component {
  state = {};

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const { questions } = this.props;
    
    return (
    <Container>
      <div className={styles.ques_screen_header}>
      <Header as='h2'>
        Question Forum
      </Header>
      </div>
      <Grid >
      <Grid.Column width={10}>
        {questions && questions.map((question) => (
          <div className={styles.ques_screen}>
          <Card fluid onClick={() => this.handleQuestionClick(question.id)}>
          <Card.Content>
            <Card.Header>{question.title}</Card.Header>
            <Card.Description>
              {question.description.length < 100 ? question.description : question.description.substr(1, 100) + "..."}
            </Card.Description>
            <Card.Meta textAlign={"right"}>3rd Oct 2020</Card.Meta>
          </Card.Content>
          </Card>
          </div>
        ))}
      </Grid.Column>
      <Grid.Column width={1}></Grid.Column>
      <div className={styles.ques_category}>
      <Grid.Column width={5}>
        <Grid.Row top="2">
          <Button onClick={this.handleQuestionCreate} primary>
            Add Question
          </Button> <br/> <br/>
        </Grid.Row>
      </Grid.Column> 
      </div> 
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