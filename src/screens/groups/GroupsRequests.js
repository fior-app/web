import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { getGroupsRequests } from "../../store/actions/groupActions";

export class GroupsRequests extends Component {
  componentDidMount() {
    this.props.getGroupsRequests();
  }

  render() {
    const { loading, groups, error } = this.props;

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
          {groups.map((groupItem) => {
            return (
              <Link to={`/groups/${groupItem.group.id}`} key={groupItem.id}>
                <div className="group-item">
                  <div className="group-header">{groupItem.group.name}</div>
                  <div className="v-spacer" />
                  <div>
                    Created by &nbsp;
                    <span>{groupItem.group.createdBy.name}</span>
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
  groups: state.groups.groupsRequests.groups,
  error: state.groups.groupsRequests.error,
});

const mapDispatchToProps = (dispatch) => ({
  getGroupsRequests: () => dispatch(getGroupsRequests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsRequests);
