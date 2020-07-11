import React, { Component } from "react";
import { connect } from "react-redux";

import { getGroupsMe } from "../../store/actions/groupActions";
import CreateGroup from "./CreateGroup";
import { Link } from "react-router-dom";
import { Modal, Grid } from "semantic-ui-react";

export class GroupsScreen extends Component {
  componentDidMount() {
    this.props.getGroupsMe();
  }

  render() {
    const { loading, groups, error } = this.props;

    // if (loading) return <div>Loading groups</div>;
    return (
      <div className="container">
        <div className="v-spacer-2" style={{ marginTop: "50px" }} />
        <Modal trigger={<div className="btn-primary">Create Group</div>} modal>
          <CreateGroup />
        </Modal>
        <div className="v-spacer-2" />
        <h2>
          <div className="margin-to-align">Groups</div>
        </h2>
        <div className="v-spacer-2" />
        <ul>
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
            </Grid.Row>
          </Grid>
        </ul>
        {error ? <div>error while loading {JSON.stringify(error)}</div> : null}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupsScreen);
