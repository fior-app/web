import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

import { Card, Container, Form, Button, Message, } from 'semantic-ui-react';

import { getQuestion, createAnswer, getAnswer, clearState } from "../../store/actions/questionActions";
import loading from "../blog/edit/edit_blog_post" ;

class ViewQuestion extends Component {
    state = {
        description: "",
    };

    componentDidMount() {
        this.props.getQuestion(this.props.match.params.questionId);
        this.props.getAnswer(this.props.match.params.questionId);
    }

    onSuccessCallback = () => {
        this.setState({
            description: "",
        })
    }

    // componentWillUnmount(){
    //     this.props.clearState();
    // }

    render() {

        const { questionId } = this.props.match.params;
        const { question,answers,createAnswer } = this.props;
        const { loading,successMsg} = this.props;
        const { description } = this.state;

        console.log(answers)

        return (
            <Container>
            <div className="keep-margin">
                <Card fluid color='green'>
                    <Card.Content>
                        <Card.Header>
                            {question.question && question.question.title}
                        </Card.Header>
                        <Card.Description>
                            {question.question && question.question.description}
                        </Card.Description>
                        <Card.Meta textAlign={"right"}>
                            3rd Oct 2020
                        </Card.Meta>
                    </Card.Content>
                </Card>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    <Form.TextArea
                        id='description'
                        className='answer'
                        type='textarea'
                        placeholder='Answer'
                        value={description}
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                    <Form.Field>
                        {answers.loading ? "Posted Successfully!" : null}
                        <Button secondary type='submit'
                            disabled={loading}
                            loading={loading}
                        >
                            Post
                        </Button>
                    </Form.Field>
               </Form>
               <h3>Answers</h3> 
                {answers.answers && answers.answers.map((answer) => {
                    return (
                    <div className='answer_box'>
                        <Card fluid>
                            <Card.Content>
                                <Card.Description>
                                    {answer.description}
                                </Card.Description>
                                <Card.Meta textAlign={"right"}>3rd Oct 2020</Card.Meta>
                            </Card.Content>
                        </Card> <br/>
                    </div>
                    );
                })}
                <Link to="/forum">← Back to Question Forum</Link>
                <div>
                {this.props.ansAnswer && this.props.ansAnswer.description}
                </div>
            </div>
            </Container>
        );
    }

    fetchQuestion = () => {

    }
    handleSubmit = (e) => {
        const { answer } = this.state;
        e.preventDefault();
        this.props.createAnswer(this.state, this.props.match.params.questionId,this.onSuccessCallback);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
}

const mapStateToProps = (state) => {
    console.log(state.question)
    
return {
    question:{
        loading: state.question.singleQuestion.loading,
        question: state.question.singleQuestion.question,
        error: state.question.singleQuestion.error,    
    },
    answers:{
        loading: state.question.answers.loading,
        answers: state.question.answers.answers,
        error: state.question.answers.error,
    },
    createAnswer:{
        loading: state.question.createAnswer.loading,
        error: state.question.createAnswer.error,
        successMsg: state.question.successMsg,
    }
}};


const mapDispatchToProps = (dispatch) => {
    return {
        getQuestion: (id) => dispatch(getQuestion(id)),
        createAnswer: (answer, qId) => dispatch(createAnswer(answer, qId)),
        getAnswer: (qID) => dispatch(getAnswer(qID))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewQuestion);