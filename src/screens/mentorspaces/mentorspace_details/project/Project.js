import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, Header, Divider, Image } from 'semantic-ui-react';
import { firestoreConnect } from 'react-redux-firebase';
import { useParams } from 'react-router-dom';

import * as styles from '../../../../styles/mentorspace-project.module.css';
import CreateUpdateProject from './CreateUpdateProject';

const NoProject = () => {
  return (
    <Container className={styles.no_project}>
      <div>Project not configured yet</div>
    </Container>
  );
};

const ProjectComponent = () => {
  return (
    <div className={styles.header}>
      <Image src="https://picsum.photos/120/120" />
      <div>
        <Header as="h1">Title</Header>
        <div className={styles.description}>
          Description flgd; s mf;dgm fg;dlgm dfgm; ldfgm
        </div>
      </div>
    </div>
  );
};

const Project = ({ project }) => {
  const { mentorspaceId } = useParams();

  return (
    <Container>
      <Header as="h2">Project Details</Header>
      <Divider />
      {project ? <ProjectComponent /> : <NoProject />}
      <CreateUpdateProject mentorspaceId />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  project: state.firestore.data.project,
});

const mapDispatchToProps = (dispatch) => ({});

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'projects',
      where: ['projectId', '==', props.match.params.mentorspaceId],
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(Project);
