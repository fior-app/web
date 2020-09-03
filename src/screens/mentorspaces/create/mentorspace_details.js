import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import styles from '../../../styles/mentorspaces.module.css';

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
      <div className={styles.modal_container}>
        <h3>Mentorspace Details</h3>

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

          <div className={styles.row}>
            <Button
              className="btn-alternate"
              onClick={this.handleNext}
            >
              Next
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default MentorspaceDetails;
