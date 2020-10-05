import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, Header, Divider, Image, Grid } from 'semantic-ui-react';
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

const ProjectComponent = ({ project }) => {
  return (
    <div className={styles.header}>
      <Image src="https://picsum.photos/120/120" circular />
      <div>
        <Header as="h1">{project.title}</Header>
        <div className={styles.description}>{project.description}</div>
      </div>
    </div>
  );
};

const Project = ({ projects }) => {
  const { mentorspaceId } = useParams();

  return (
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">Project Details</Header>
          </Grid.Column>
          <Grid.Column className={styles.upsert_project}>
            <CreateUpdateProject mentorspaceId={mentorspaceId} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      {projects && projects[mentorspaceId] ? (
        <ProjectComponent project={projects[mentorspaceId]} />
      ) : (
        <NoProject />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  projects: state.firestore.data.projects,
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
