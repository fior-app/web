import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import * as styles from './../../../../styles/mentorspace-project.module.css';

export class GithubLink extends Component {
  render() {
    const { link } = this.props;
    return <div className={styles.github_link_card}>{link}</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GithubLink);
