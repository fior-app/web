import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuestion } from '../../store/actions/questionActions';

class CreateQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title, description } = this.state;

    e.preventDefault();
    this.props.createQuestion({
      title,
      description,
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
}

const mapDispatchToProps = { createQuestion };

export default connect(null, mapDispatchToProps)(CreateQuestion);
