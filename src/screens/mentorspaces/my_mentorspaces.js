import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, Image } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../../styles/mentorspaces.module.css';
import { getGroupsMe } from '../../store/actions/mentorspaceActions';

class MyMentorspaces extends Component {
  componentDidMount() {
    this.props.getGroupsMe();
  }

  render() {
    const { loading, mentorspaces, error } = this.props;

    console.log(mentorspaces);

    if (loading) {
      return (
        <Grid>
          <Grid.Row>
            <div className="group-item">
              <div className="group-header">Loading</div>
              <div className="v-spacer"/>
              <div/>
            </div>
          </Grid.Row>
        </Grid>
      );
    }

    return (
      <div className={styles.section_wrapper}>
        <Card.Group>
          {mentorspaces.reverse().map((mentorspaceItem) => (
            <Card
              as={Link}
              to={`/mentorspaces/${mentorspaceItem.group.id}`}
              key={mentorspaceItem.id}>
              <Card.Content>
                <Card.Header>{mentorspaceItem.group.name}</Card.Header>
                <Card.Meta>
                  <span>{mentorspaceItem.group.createdBy.name}</span>
                </Card.Meta>
                {mentorspaceItem.group.description && (
                  <Card.Description>
                    {mentorspaceItem.group.description}
                  </Card.Description>
                )}
              </Card.Content>
            </Card>
          ))}
          {error ? `error: ${JSON.stringify(error)}` : null}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.groups.loading,
  mentorspaces: state.groups.groups.groups,
  error: state.groups.groups.error,
});

const mapDispatchToProps = { getGroupsMe };

export default connect(mapStateToProps, mapDispatchToProps)(MyMentorspaces);
