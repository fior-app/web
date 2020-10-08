import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import { createMentorspace } from '../../../store/actions/mentorspaceActions';
import styles from '../../../styles/mentorspaces.module.css';

class CreateMentorspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      icon: '',
    };
  }

  handleCreateMentorspace = () => {
    const { createSpace, closeModal } = this.props;
    createSpace(this.state, closeModal);
  };

  handleOnChangeInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { name, description, icon } = this.state;
    const { error, loading } = this.props;

    return (
      <div className={styles.modal_container}>
        <h3>Create your awesome mentorspace</h3>

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

          {error && JSON.stringify(error)}
          {loading ? (
            <div className={styles.information}>Creating mentorspace...</div>
          ) : null}

          <div className={styles.row}>
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

const mapStateToProps = (state) => ({
  loading: state.groups.createGroup.loading,
  error: state.groups.createGroup.error,
});

const mapDispatchToProps = (dispatch) => ({
  createSpace: (mentorspace, cb) =>
    dispatch(createMentorspace(mentorspace, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMentorspace);
