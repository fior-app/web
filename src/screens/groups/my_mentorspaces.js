import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getGroupsMe } from '../../store/actions/mentorspaceActions';
import Group from '../../store/models/group';

class MyMentorspaces extends Component {
  componentDidMount() {
    this.props.getGroupsMe();
  }

  render() {
    const { loading, mentorspaces, error } = this.props;

    if (loading) {
      return (
        <Grid>
          <Grid.Row>
            <div className="group-item">
              <div className="group-header">Loading</div>
              <div className="v-spacer" />
              <div />
            </div>
          </Grid.Row>
        </Grid>
      );
    }

    return (
      <Grid>
        <Grid.Row>
          {mentorspaces.map((mentorspaceItem) => (
            <Link
              to={`/mentorspaces/${mentorspaceItem.group.id}`}
              key={mentorspaceItem.id}
            >
              <div className="group-item">
                <div className="group-header">
                  {mentorspaceItem.group.name}
                </div>
                <div className="v-spacer" />
                <div>
                  Created by &nbsp;
                  <span>{mentorspaceItem.group.createdBy.name}</span>
                </div>
              </div>
            </Link>
          ))}
          {error ? `error: ${JSON.stringify(error)}` : null}
        </Grid.Row>
      </Grid>
    );
  }
}

MyMentorspaces.propTypes = {
  getGroupsMe: PropTypes.func.isRequired,
  mentorspaces: PropTypes.arrayOf(Group).isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.groups.groups.loading,
  mentorspaces: state.groups.groups.groups,
  error: state.groups.groups.error,
});

const mapDispatchToProps = { getGroupsMe };

export default connect(mapStateToProps, mapDispatchToProps)(MyMentorspaces);
