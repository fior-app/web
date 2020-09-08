import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';

import * as styles from './../../../../styles/mentorspace-project.module.css';
import { updateProjectGithubLinks } from '../../../../store/actions/mentorspaceActions';

export class AddRepository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '',
      isOpen: false,
      inValid: false,
    };
  }

  validate = async (link) => {
    const regex = 'https:\\/\\/github\\.com(?:\\/[^\\/]+)(?:\\/[^\\/]+)';
    if (!link.match(regex)) {
      await this.setState({ inValid: true });
      return false;
    }
    return true;
  };

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLinkAdd = async () => {
    if (!(await this.validate(this.state.link))) {
      return;
    }
    this.props.updateProjectGithubLinks(
      this.props.projectId,
      this.state.link,
      this.closeModelWithClearData
    );
  };

  closeModelWithClearData = () => {
    this.setState({ link: '' });
    this.closeModal();
  };

  showModal = () => {
    this.setState((state) => ({ ...state, isOpen: true }));
  };

  closeModal = () => {
    this.setState((state) => ({ ...state, isOpen: false }));
  };

  render() {
    const { loading, error } = this.props;
    return (
      <Modal
        trigger={
          <Button icon className="btn-primary" onClick={this.showModal}>
            <Icon name="add" />
            &nbsp; add Repository
          </Button>
        }
        size="mini"
        closeIcon
        onClose={this.closeModal}
        open={this.state.isOpen}
      >
        <Modal.Header>Enter a valid github link to a repository</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {loading ? <div>updating...</div> : null}
            {this.state.inValid ? <div>Invalid github Link</div> : null}
            <Form>
              <Form.Field>
                <input
                  type="text"
                  id="link"
                  placeholder="Github repository link"
                  value={this.state.link}
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

              <div className="row end">
                <button
                  type="button"
                  className="btn-alternate"
                  disabled={false}
                  onClick={this.handleLinkAdd}
                >
                  Add Repository
                </button>
              </div>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.addingGithubLink.loading,
  error: state.groups.addingGithubLink.error,
});

const mapDispatchToProps = (dispatch) => ({
  updateProjectGithubLinks: (projectId, link, cb) =>
    dispatch(updateProjectGithubLinks(projectId, link, cb)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddRepository);
