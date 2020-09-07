import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as styles from '../../../../styles/mentorspace-project.module.css';
import { Card, Divider, Button, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export class ProjectWidget extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projects) {
      const project = nextProps.projects[this.props.mentorspaceId];
      this.setState({ title: project.title, description: project.description });
    }
  }

  render() {
    const { title, description } = this.state;
    return (
      <Card>
        <Card.Content>
          <Card.Header>Project Details</Card.Header>
          <Divider />
          {title ? (
            <>
              <Card.Description>
                <Header as="h3">{title}</Header>
              </Card.Description>
              <Card.Meta>{description}</Card.Meta>
            </>
          ) : (
            <NavLink
              to={'/mentorspaces/' + this.props.mentorspaceId + '/project'}
            >
              <Button>Configure Project</Button>
            </NavLink>
          )}
        </Card.Content>
      </Card>
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
)(ProjectWidget);
