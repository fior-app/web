import React, { Component } from 'react';

import {
  Modal, Button, Icon, Container,
} from 'semantic-ui-react';
import CreateMentorspace from './create/create_mentorspace';

import MyMentorspaces from './my_mentorspaces';

class MentorspacesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <Modal
          trigger={(
            <Button
              icon
              className="btn-primary"
              onClick={() => this.setState({ showModal: true })}
            >
              <Icon name="add" />
              &nbsp; Create Mentorspace
            </Button>
          )}
          size="mini"
          closeIcon
          onClose={this.closeModal}
          open={showModal}
        >
          <CreateMentorspace closeModal={this.closeModal} />
        </Modal>
        <h2>Mentorspaces</h2>
        <MyMentorspaces />
      </Container>
    );
  }
}

export default MentorspacesScreen;
