import React, { Component } from "react";
import { Form, Modal } from "semantic-ui-react";

export class MentorspaceDetails extends Component {
  state = {
    name: "",
    description: "",
    icon: "",
  };

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleNext = (e) => {
    this.props.handleNext("group", this.state);
  };

  componentDidMount() {
    this.setState({ ...this.state, ...this.props.group });
  }

  render() {
    return (
      <div className="modal">
        <div className="card-header">Mentorspace Details</div>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
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

              <div className="row end">
                <div className="btn-alternate" onClick={this.handleNext}>
                  Next
                </div>
              </div>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </div>
    );
  }
}

export default MentorspaceDetails;
