import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Card, Divider, Button, Header } from 'semantic-ui-react';

import * as styles from '../../../../styles/mentorspace-project.module.css';

export class ProjectWidget extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      githubLinks: [],
      projectId: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projects) {
      const project = nextProps.projects[this.props.mentorspaceId];
      this.setState({
        title: project.title,
        description: project.description,
        githubLinks: project.githubLinks,
        projectId: project.projectId,
      });
    }
  }

  render() {
    const { title, description, githubLinks, projectId } = this.state;
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
              {githubLinks &&
                githubLinks.map((link, index) => {
                  return (
                    <Card
                      as={Link}
                      to={`/mentorspaces/${projectId}/project`}
                      key={index}
                    >
                      <Card.Content>
                        {`${link.owner}/${link.repository}`}
                      </Card.Content>
                    </Card>
                  );
                })}
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
