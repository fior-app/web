import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import * as styles from './../../../../styles/mentorspace-project.module.css';

export class GithubLinks extends Component {
  render() {
    return (
      <Card className={styles.github_card}>
        <Card.Content>dddd</Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GithubLinks);
