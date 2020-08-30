import React, { Component } from 'react';
import { Form, Modal } from 'semantic-ui-react';

class MentorspaceDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      icon: '',
    };
  }

  componentDidMount() {
    const { group } = this.props;
    this.setState((state) => ({ ...state, ...group }));
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleNext = () => {
    const { handleNext } = this.props;
    handleNext('group', this.state);
  };

  render() {
    const { name, description, icon } = this.state;

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
                  value={name}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              <Form.Field>
                <input
                  type="text"
                  id="description"
                  placeholder="Description"
                  value={description}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              <Form.Field>
                <input
                  type="text"
                  id="icon"
                  placeholder="Icon"
                  value={icon}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>

              <div className="row end">
                <button
                  type="button"
                  className="btn-alternate"
                  onClick={this.handleNext}
                >
                  Next
                </button>
              </div>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </div>
    );
  }
}

export default MentorspaceDetails;
