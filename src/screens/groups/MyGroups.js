import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { getGroupsMe } from "../../store/actions/groupActions";

export class MyGroups extends Component {
  componentDidMount() {
    this.props.getGroupsMe();
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
  loading: state.groups.groups.loading,
  groups: state.groups.groups.groups,
  error: state.groups.groups.error,
});

const mapDispatchToProps = (dispatch) => ({
  getGroupsMe: () => dispatch(getGroupsMe()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGroups);
