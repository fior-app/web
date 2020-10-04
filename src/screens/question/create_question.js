import React, { Component } from "react";
import {
  Button, Form, Container, Message, Modal, Icon, Header, Label,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { createQuestion } from "../../store/actions/questionActions";
import { connect } from "react-redux";



class CreateQuestion extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <Link to="/forum">← Back to Question Forum</Link>
        <h4>Create Question</h4>
        <Form success onSubmit={this.handleSubmit}>
          <Form.Field>
          <Form.Input
            id='title'
            className='username'
            type='text'
            placeholder='Title'
            onChange={this.handleChange}
          />
          </Form.Field>
          <Form.Field>
          <Form.TextArea
            id='description'
            className='password'
            type='textarea'
            placeholder='Description'
            onChange={this.handleChange}
          />
          </Form.Field>
          <Form.Field>
            <Button type='submit'>
              Create
            </Button>
          </Form.Field>
        </Form>
      </Container>
    );
  }

  handleSubmit = (e) => {
    const { title, description } = this.state;

    e.preventDefault();
    console.log(this.state.title, this.state.description);
    this.props.createQuestion({ title, description });
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createQuestion: (question) => dispatch(createQuestion(question)),
  };
};

export default connect(null, mapDispatchToProps)(CreateQuestion);
