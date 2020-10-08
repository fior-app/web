import React, { Component } from 'react';

import {
  Modal, Button, Icon, Container, Header,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import CreateMentorspace from './create/create_mentorspace';

import MyMentorspaces from './my_mentorspaces';

class MentorspacesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showAlertModal: false,
    };
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

    openAlertModal = () => {
      this.setState({ showAlertModal: true });
    };

    closeAlertModal = () => {
      this.setState({ showAlertModal: false });
    };

  handleOnOpenClick = () => {
    const { mentorspaces } = this.props;

    if (mentorspaces && mentorspaces.length < 2) this.setState({ showModal: true });
    else this.openAlertModal();
  }

    handleProceed = () => {
      this.closeAlertModal();
      this.props.history.push('/pricing');
    }

    render() {
      const { showModal, showAlertModal } = this.state;

      return (
        <Container>
          <Modal
            trigger={(
              <Button
                icon
                className="btn-primary"
                onClick={this.handleOnOpenClick}
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
          <Modal
            basic
            onClose={this.closeAlertModal}
            open={showAlertModal}
            size="small"
          >
            <Header icon>
              <Icon name="warning circle" />
              Update membership?
            </Header>
            <Modal.Content>
              <p>
                You have reach the maximum number of free mentorspaces,
                Would you like to upgrade your membership plan?
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color="red" inverted onClick={this.closeAlertModal}>
                <Icon name="remove" />
                {' '}
                No
              </Button>
              <Button color="green" inverted onClick={this.handleProceed}>
                <Icon name="checkmark" />
                {' '}
                Yes
              </Button>
            </Modal.Actions>
          </Modal>
          <h2>Mentorspaces</h2>
          <MyMentorspaces />
        </Container>
      );
    }
}

const mapStateToProps = (state) => ({
  mentorspaces: state.groups.groups.groups,
});

export default connect(mapStateToProps)(MentorspacesScreen);
