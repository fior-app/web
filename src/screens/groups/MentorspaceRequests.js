import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { getMentorspaceRequests } from "../../store/actions/mentorspaceActions";

export class MentorspaceRequests extends Component {
  componentDidMount() {
    this.props.getMentorspaceRequests();
  }

  render() {
    const { loading, mentorspaces, error } = this.props;

    if (loading)
      return (
        <Grid>
          <Grid.Row>
            <div className="group-item">
              <div className="group-header">Loading</div>
              <div className="v-spacer" />
              <div></div>
            </div>
          </Grid.Row>
        </Grid>
      );

    return (
      <Grid>
        <Grid.Row>
          {mentorspaces.map((MentorspaceItem) => {
            return (
              <Link
                to={`/mentorspaces/${MentorspaceItem.group.id}`}
                key={MentorspaceItem.id}
              >
                <div className="group-item">
                  <div className="group-header">
                    {MentorspaceItem.group.name}
                  </div>
                  <div className="v-spacer" />
                  <div>
                    Created by &nbsp;
                    <span>{MentorspaceItem.group.createdBy.name}</span>
                  </div>
                </div>
              </Link>
            );
          })}
          {error ? "error: " + JSON.stringify(error) : null}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.groupsRequests.loading,
  mentorspaces: state.groups.groupsRequests.groups,
  error: state.groups.groupsRequests.error,
});

const mapDispatchToProps = (dispatch) => ({
  getMentorspaceRequests: () => dispatch(getMentorspaceRequests()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorspaceRequests);
