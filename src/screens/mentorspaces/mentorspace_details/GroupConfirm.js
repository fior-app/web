import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeGroupState } from '../../../store/actions/mentorspaceActions';
import { Button, Loader } from "semantic-ui-react";

class GroupConfirm extends Component {
  handleChangeState = (state) => {
    this.props.changeGroupState(this.props.groupId, {
      state,
    });
  };

  render() {
    const { loading } = this.props;

    return (
      <>
        {loading ? (
          <Loader active inline/>
        ) : (
          <>
            <Button
              type="button"
              positive
              onClick={() => this.handleChangeState('OK')}>
              ACCEPT
            </Button>
            <Button type="button" negative onClick={() => this.handleChangeState('DECLINED')}>
              DECLINE
            </Button>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.changeGroupState.loading,
  error: state.groups.changeGroupState.error,
});

const mapDispatchToProps = (dispatch) => ({
  changeGroupState: (groupId, state) => dispatch(changeGroupState(groupId, state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupConfirm);
