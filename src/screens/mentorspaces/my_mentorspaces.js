import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
              <div className="v-spacer" />
              <div />
            </div>
          </Grid.Row>
        </Grid>
      );
    }

    return (
      <div className={styles.section_wrapper}>
        <Grid>
          {mentorspaces.reverse().map((mentorspaceItem) => (
            <Link
              to={`/mentorspaces/${mentorspaceItem.group.id}`}
              key={mentorspaceItem.id}
            >
              <div className={styles.mentorspace_item_container}>
                <div>
                  <h3>
                    {mentorspaceItem.group.name}
                  </h3>
                  {mentorspaceItem.group.description}
                </div>
                <div>
                  {mentorspaceItem.group.createdBy.name}
                </div>
              </div>
            </Link>

          //   <div className="group-item">
          //     <div className="group-header">
          //       {mentorspaceItem.group.name}
          //     </div>
          //     <div className="v-spacer" />
          //     <div>
          //       Created by &nbsp;
          //       <span>{mentorspaceItem.group.createdBy.name}</span>
          //     </div>
          //   </div>
          ))}
          {error ? `error: ${JSON.stringify(error)}` : null}
        </Grid>
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
