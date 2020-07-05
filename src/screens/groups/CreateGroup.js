import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Form, Modal } from "semantic-ui-react";

import { createGroup } from "../../store/actions/groupActions";

export class CreateGroup extends Component {
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

  handleCreateGroup = (e) => {
    this.props.createGroup(this.state);
  };

  closePopup = (e) => {
    this.props.close();
  };

  render() {
    const { error, loading } = this.props;

    return (
      <div className='modal'>
        <div className='card-header'>Create Group</div>
        <Modal.Content>
          <Modal.Description>
            {loading ? <div>creating..</div> : null}
            <Form>
              <Form.Field>
                <input
                  type='text'
                  id='name'
                  placeholder='Name'
                  value={this.state.name}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              <Form.Field>
                <input
                  type='text'
                  id='description'
                  placeholder='Description'
                  value={this.state.description}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              {/* since any storage bucket not installed in system. lets continue with a link */}
              <Form.Field>
                <input
                  type='text'
                  id='icon'
                  placeholder='Icon'
                  value={this.state.icon}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              <Form.Field>
                {error ? <div>Error.. {error}</div> : null}
              </Form.Field>

              <div className='row end'>
                <div
                  className='btn-alternate'
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

const mapStateToProps = (state) => ({
  loading: state.groups.createGroup.loading,
  error: state.groups.createGroup.error,
});

const mapDispatchToProps = (dispatch) => ({
  createGroup: (group) => dispatch(createGroup(group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
