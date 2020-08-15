import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuestion } from '../../store/actions/questionActions';

class CreateQuestion extends Component {
  state = {
    title: '',
    description: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div className="keep-margin">
        <h4>Create Question</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            id="title"
            className="username"
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <input
            id="description"
            className="password"
            type="text"
            placeholder="Description"
            onChange={this.handleChange}
          />
          <button type="submit" className="signin_btn secondary_btn">
            Create
          </button>
        </form>
      </div>
    );
  }

  handleSubmit = (e) => {
    const { title, description } = this.state;

    e.preventDefault();
    console.log(this.state.title, this.state.description);
    this.props.createQuestion({ title, description });
  };
}

const mapDispatchToProps = (dispatch) => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
});

export default connect(null, mapDispatchToProps)(CreateQuestion);
