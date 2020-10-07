import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Divider } from 'semantic-ui-react';
import { GithubLink } from './GithubLink';
import { firestoreConnect } from 'react-redux-firebase';

import * as styles from './../../../../styles/mentorspace-project.module.css';
import AddRepository from './AddRepository';

export class GithubRepositories extends Component {
  render() {
    const { mentorspaceId } = this.props;

    return (
      <div className={styles.github_card}>
        <div className={styles.header}>
          <span>Github Repositories</span>
          <AddRepository projectId={mentorspaceId} />
        </div>
        <Divider />
        {this.props.projects[mentorspaceId].githubLinks.map((link, index) => (
          <GithubLink link={link} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.firestore.data.projects,
});

const mapDispatchToProps = (dispatch) => ({});

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'projects',
      where: ['projectId', '==', props.mentorspaceId],
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(GithubRepositories);
