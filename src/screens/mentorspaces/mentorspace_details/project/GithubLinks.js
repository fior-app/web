import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import * as styles from './../../../../styles/mentorspace-project.module.css';

export class GithubLinks extends Component {
  render() {
    return <div className={styles.github_card}>dsdfd</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GithubLinks);
