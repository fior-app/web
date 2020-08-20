import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeGroupState } from '../../store/actions/mentorspaceActions';

class GroupConfirm extends Component {
  handleChangeState = (state) => {
    this.props.changeGroupState(this.props.groupId, {
      state,
    });
  };

  render() {
    return (
      <div>
        Accept group invitation
        <button type="button" onClick={() => this.handleChangeState('OK')}>confirm</button>
        <button type="button" onClick={() => this.handleChangeState('DECLINED')}>
          decline
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.changeGroupState.loading,
  error: state.groups.changeGroupState.error,
});

// eslint-disable-next-line react-redux/mapDispatchToProps-prefer-shorthand
const mapDispatchToProps = (dispatch) => ({
  changeGroupState: (groupId, state) => dispatch(changeGroupState(groupId, state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupConfirm);
