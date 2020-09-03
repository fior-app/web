import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import styles from '../../../styles/mentorspaces.module.css';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      github: [],
      githubLinks: 1,
    };
  }

  componentDidMount() {
    const { project } = this.props;
    this.setState((state) => ({ ...state, ...project }));
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleCreateMentorspace = () => {
    const { handleCreateMentorspace } = this.props;
    handleCreateMentorspace('project', this.state);
  };

  handleBack = () => {
    const { handleBack } = this.props;
    handleBack('project', this.state);
  };

  render() {
    const { error, loading } = this.props;
    const { title, description, icon } = this.state;

    return (
      <div className={styles.modal_container}>
        <h3>
          Project Details
        </h3>

        <Form>
          <Form.Field>
            <input
              type="text"
              id="title"
              required
              placeholder="Title"
              value={title}
              onChange={this.handleOnChangeInput}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              id="description"
              required
              placeholder="Description"
              value={description}
              onChange={this.handleOnChangeInput}
            />
          </Form.Field>
          {/* since any storage bucket not installed in system. lets continue with a link */}
          <Form.Field>
            <input
              type="text"
              id="icon"
              placeholder="Icon"
              value={icon}
              onChange={this.handleOnChangeInput}
            />
          </Form.Field>
          <Form.Field>
            {error ? (
              <div>
                Error..
                {JSON.stringify(error)}
              </div>
            ) : null}
          </Form.Field>
          <Form.Field>
            {loading ? (
              <div>Creating Mentor Space please wait..</div>
            ) : null}
          </Form.Field>
          <div className="row end">
            <Button className="btn-alternate" onClick={this.handleBack}>
              Back
            </Button>
            <Button
              className="btn-alternate"
              disabled={loading}
              onClick={this.handleCreateMentorspace}
            >
              Create
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default ProjectDetails;
