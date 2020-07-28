import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div className='not-found-logo'>
        <Image src='assets/img/404.jpg' size='large' />
        <div className='row center'>
          <div>Page not found</div>
        </div>
        <div className='v-spacer-6'></div>
        <div className='row center'>
          <button className='btn-primary' onClick={this.handleBackClick}>
            Back to home page
          </button>
        </div>
      </div>
    );
  }

  handleBackClick = () => {
    return <Redirect to='/' />;
  };
}
