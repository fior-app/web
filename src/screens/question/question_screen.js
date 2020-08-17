import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../store/actions/questionActions';

class QuestionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getQuestions();
  }

  handleQuestionCreate = () => {
    this.props.history.push('/question-forum/create');
  };

  render() {
    const { questions } = this.props;

    return (
      <div className="keep-margin">
        <h4>Question Screen</h4>
        <button type="button" className="secondary_btn" onClick={this.handleQuestionCreate}>
          Add New
        </button>
        {questions
        && questions.map((question) => (
          <div>
            <div>{question.title}</div>
            <div>{question.description}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.question.questions,
});

const mapDispatchToProps = { getQuestions };

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
