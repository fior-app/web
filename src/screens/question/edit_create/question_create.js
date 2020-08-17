import React, { Component } from "react" ;
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

    onSuccessCallback = () => {
        this.setState({
          title: "",
          description: "",
        })
      }
    
      componentWillUnmount(){
    this.props.clearState();
      }

    render() {

        const { title, description } = this.state;
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
                value={title}
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
              <Form.TextArea
                id='description'
                className='password'
                type='textarea'
                placeholder='Description'
                value={description}
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <Button secondary type='submit' disabled={loading}
                loading={loading}>
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
        this.props.createQuestion({ title, description },this.onSuccessCallback);
      };
    }
    
    const mapStateToProps = (state) => ({
      loading: state.question.isLoading,
      error: state.question.error,
      successMsg: state.question.successMsg,
    });
    
    const mapDispatchToProps = (dispatch) => {
      return {
        createQuestion: (question,cb) => dispatch(createQuestion(question,cb)),
        clearState: () => dispatch(clearState()),
      };
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);