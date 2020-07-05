import React, { Component } from "react";
import { connect } from "react-redux";

export class GroupScreen extends Component {
  state = {
    message: "",
    messages: [],
  };

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSendMessage = (e) => {};

  render() {
    const { group } = this.props;
    return (
      <div>
        <div>{group.name}</div>
        <div>{group.description}</div>
        <br />
        <br />
        <div>
          chat
          <div>
            <input
              type="text"
              id="message"
              value={this.state.message}
              onChange={this.handleOnChangeInput}
            />
            <button onClick={this.handleSendMessage}>Send message</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GroupScreen);
