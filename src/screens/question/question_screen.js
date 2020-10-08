import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Grid, Button, Label, Card, Feed, Header,
} from 'semantic-ui-react';
import { getQuestions } from '../../store/actions/questionActions';
import styles from '../../styles/question.module.css';

class QuestionScreen extends Component {
  state = {};

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const { questions, user, skills } = this.props;
    console.log(questions);

    return (
      <Container>
        <Grid>
          <Grid.Column width={10}>
            {questions && questions.map((question) => (
              <div className={styles.ques_screen}>
                <Card fluid onClick={() => this.handleQuestionClick(question.id)}>
                  <Card.Content>
                    <Card.Header>{question.title}</Card.Header>
                    <Card.Description>
                      {question.description.length < 100 ? question.description : `${question.description.substr(1, 100)}...`}
                    </Card.Description>
                    <Card.Meta textAlign="right">3rd Oct 2020</Card.Meta>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </Grid.Column>
          <Grid.Column width={1}/>
          <div className={styles.ques_category}>
            <Grid.Column width={5}>
              {user && (
                <Grid.Row top="2">
                  <Button onClick={this.handleQuestionCreate} color="teal">
                    Add Question
                  </Button>
                </Grid.Row>
              )}
              <div className={styles.spacer_min}/>
              <Grid.Row>
                <Card>
                  <Card.Content>
                    <Card.Header>Categories</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    {skills.map((category) => (
                      <Label key={category.id}>
                        {category.name}
                      </Label>
                    ))}
                  </Card.Content>
                </Card>
              </Grid.Row>
            </Grid.Column>
          </div>
        </Grid>
      </Container>
    );
  }

  handleQuestionCreate = () => {
    this.props.history.push('/question-forum/create');
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
  user: state.auth.currentUser,
  skills: state.skills.skills.items,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: () => dispatch(getQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
