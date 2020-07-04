import React, { Component } from "react";
import { connect } from "react-redux";

import { createGroup } from "../../store/actions/groupActions";

export class CreateGroup extends Component {
  state = {
    name: "",
    description: "",
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
      <div>
        <br />
        create group
        <br />
        {loading ? <div>creating..</div> : null}
        <br />
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleOnChangeInput}
        />
        <br />
        <input
          type="text"
          id="description"
          value={this.state.description}
          onChange={this.handleOnChangeInput}
        />
        <br />
        {error ? <div>Error.. {error}</div> : null}
        <br />
        <button disabled={loading} onClick={this.handleCreateGroup}>
          create group
        </button>
        <br />
        <button onClick={this.closePopup}>close</button>
        <br />
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
