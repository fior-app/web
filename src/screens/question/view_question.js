import { rangeRight } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Card, Container, Form, Button, Message, Label, Grid,
} from 'semantic-ui-react';

import {
  getQuestion, createAnswer, getAnswer, clearState,
} from '../../store/actions/questionActions';
import loading from '../blog/edit/edit_blog_post';
import styles from '../../styles/question.module.css';

class ViewQuestion extends Component {
    state = {
      description: '',
    };

    componentDidMount() {
      this.props.getQuestion(this.props.match.params.questionId);
      this.props.getAnswer(this.props.match.params.questionId);
    }

    onSuccessCallback = () => {
      this.setState({
        description: '',
      });
    }

    // componentWillUnmount(){
    //     this.props.clearState();
    // }

    render() {
      const { questionId } = this.props.match.params;
      const { question, answers, createAnswer } = this.props;
      const { loading, successMsg } = this.props;
      const { description } = this.state;

      console.log(answers);

      return (
        <Container>
          <Link to="/forum">← Back to Question Forum</Link>
          {' '}
          <br />
          <br />
          <div>
            <Card fluid color="green">
              <Card.Content>
                <div className={styles.ques_label}>
                  <Label as="a" color="red" tag>
                    Question
                  </Label>
                </div>
                <div className={styles.ques_content_header}>
                  <Card.Header>
                    {question.question && question.question.title}
                  </Card.Header>
                </div>
                <div className={styles.ques_content_description}>
                  <Card.Description>
                    {question.question && question.question.description}
                  </Card.Description>
                </div>
                <div className={styles.answer_date}>
                  <Card.Meta textAlign="right">
                    3rd Oct 2020
                  </Card.Meta>
                </div>
              </Card.Content>
            </Card>
            <h3>Answers</h3>
            {answers.answers && answers.answers.map((answer) => (
              <div className="answer_box">
                <Card fluid>
                  <Card.Content>
                    <Card.Description>
                      {answer.description}
                    </Card.Description>
                    <div className={styles.answer_date}>
                      <Card.Meta textAlign="right">3rd Oct 2020</Card.Meta>
                    </div>
                  </Card.Content>
                </Card>
                {' '}
                <br />
              </div>
            ))}
            <div>
              {this.props.ansAnswer && this.props.ansAnswer.description}
            </div>
            <h3>Answer here</h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.TextArea
                  id="description"
                  className="answer"
                  type="textarea"
                  placeholder="Answer"
                  value={description}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                {answers.loading ? 'Posted Successfully!' : null}
                <div className={styles.post_row}>
                  <Button
                    type="submit"
                    disabled={loading}
                    loading={loading}
                    color="teal"
                  >
                    Post
                  </Button>
                </div>
              </Form.Field>
            </Form>
          </div>
        </Container>
      );
    }

    fetchQuestion = () => {

    }

    handleSubmit = (e) => {
      const { answer } = this.state;
      e.preventDefault();
      this.props.createAnswer(this.state, this.props.match.params.questionId, this.onSuccessCallback);
    };

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
}

const mapStateToProps = (state) => {
  console.log(state.question);

  return {
    question: {
      loading: state.question.singleQuestion.loading,
      question: state.question.singleQuestion.question,
      error: state.question.singleQuestion.error,
    },
    answers: {
      loading: state.question.answers.loading,
      answers: state.question.answers.answers,
      error: state.question.answers.error,
    },
    createAnswer: {
      loading: state.question.createAnswer.loading,
      error: state.question.createAnswer.error,
      successMsg: state.question.successMsg,
    },
  };
};

const mapDispatchToProps = (dispatch) => ({
  getQuestion: (id) => dispatch(getQuestion(id)),
  createAnswer: (answer, qId) => dispatch(createAnswer(answer, qId)),
  getAnswer: (qID) => dispatch(getAnswer(qID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewQuestion);
