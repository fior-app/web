import React, { Component } from "react";
import { Form, Modal } from "semantic-ui-react";

export class ProjectDetails extends Component {
  state = {
    title: "",
    description: "",
    github: [],
    githubLinks: 1,
  };

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleCreateGroup = (e) => {
    this.props.handleCreateGroup("project", this.state);
  };

  handleBack = (e) => {
    this.props.handleBack("project", this.state);
  };

  componentDidMount() {
    this.setState({ ...this.state, ...this.props.project });
  }

  render() {
    const { error, loading } = this.props;

    return (
      <div className="modal">
        <div className="card-header">Project Details</div>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              <Form.Field>
                <input
                  type="text"
                  id="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              {/* since any storage bucket not installed in system. lets continue with a link */}
              <Form.Field>
                <input
                  type="text"
                  id="icon"
                  placeholder="Icon"
                  value={this.state.icon}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              <Form.Field>
                {error ? <div>Error.. {error}</div> : null}
              </Form.Field>

              <div className="row end">
                <div className="btn-alternate" onClick={this.handleBack}>
                  Back
                </div>
                <div
                  className="btn-alternate"
                  disabled={loading}
                  onClick={this.handleCreateGroup}
                >
                  Create
                </div>
              </div>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </div>
    );
  }
}

export default ProjectDetails;
