import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import { GithubLink } from './GithubLink';

import * as styles from './../../../../styles/mentorspace-project.module.css';
import AddRepository from './AddRepository';

export class GithubRepositories extends Component {
  render() {
    return (
      <div className={styles.github_card}>
        <div className={styles.header}>
          <span>Github Repositories</span>
          <AddRepository projectId={this.props.mentorspaceId} />
        </div>
        <Divider />
        <GithubLink link={'sexy'} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GithubRepositories);
