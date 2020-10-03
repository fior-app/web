import React  from "react";
import { Divider, List, Dropdown, Header, Button, Icon } from "semantic-ui-react";

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AddEditMilestone from "./add_edit_milestone";
import styles from "../../../../styles/mentorspace-milestone.module.css";
import MilestoneSubtasks from "./milestone_subtasks";

const Milestones = ({
  milestones,
}) => {
  const { mentorspaceId } = useParams();

  return (
    <>
      <div className={styles.milestone_header}>
        <Header as={"h2"} floated='left'>Milestones</Header>
        <AddEditMilestone mentorspaceId={mentorspaceId} trigger={(open) => (
          <Button onClick={open}>
            <Icon name={'plus'}/>
            Milestone
          </Button>
        )}/>
      </div>
      <Divider />
      <List>
        {milestones ? (
          Object.keys(milestones).map((key) => {
            const milestone = { ...milestones[key], id: key };
            return milestone ? (
              <List.Item key={key}>
                <List.Content floated='right'>
                  <Dropdown icon='ellipsis vertical'>
                    <Dropdown.Menu direction={"left"}>
                      <AddEditMilestone
                        mentorspaceId={mentorspaceId}
                        milestone={milestone}
                        trigger={(open) => (
                          <Dropdown.Item text='Edit' onClick={open}/>
                        )}/>
                    </Dropdown.Menu>
                  </Dropdown>
                </List.Content>
                <List.Icon name='wait'/>
                <List.Content>
                  <List.Header>{milestone.title}</List.Header>
                  <List.Description>{milestone.due}</List.Description>
                  <MilestoneSubtasks milestone={milestone} />
                </List.Content>
              </List.Item>
            ) : (
              <div key={key}/>
            );
          })
        ) : (
          <li>No messages</li>
        )}
      </List>
    </>
  );
};

const mapStateToProps = (state) => ({
  milestones: state.firestore.data.milestones,
});

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'milestones',
      // orderBy: ['due', 'desc'],
      limit: 25,
      where: ['groupId', '==', props.match.params.mentorspaceId],
    },
  ]),
  connect(mapStateToProps)
)(Milestones);
