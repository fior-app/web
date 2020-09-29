import React, { useState } from "react";
import { Divider, List, Form, Header, Input, Button } from "semantic-ui-react";
import { addMilestoneToFirebase } from "../../../../store/actions/mentorspaceActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Milestones = ({
  milestones,
  milestoneCreating,
  milestoneCreateError,
  dispatchAddGroupMilestone
}) => {
  const initialState = {
    title: '',
    due: ''
  };

  const [state, setState] = useState(initialState);

  const { mentorspaceId } = useParams()

  const handleOnChangeInput = (e, { name, value }) => {
    console.log(name, value)
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleAddMilestone = () => {
    if (state.title && state.title !== '') {
      console.log(mentorspaceId, state.title, state.due)
      dispatchAddGroupMilestone(mentorspaceId, state.title, state.due);
    }
    setState({ title: '', due: '' });
  };

  return (
    <>
      <Header as={"h2"}>Milestones</Header>
      <Divider/>
      <List>
        {milestones ? (
          Object.values(milestones).map((milestone, index) => {
            return milestone ? (
              <List.Item key={index}>
                <List.Icon name='wait'/>
                <List.Content>
                  <List.Header>{milestone.title}</List.Header>
                  <List.Description>{milestone.due}</List.Description>
                </List.Content>
              </List.Item>
            ) : (
              <div key={index}/>
            );
          })
        ) : (
          <li>No messages</li>
        )}
      </List>
      <Form onSubmit={handleAddMilestone}>
        <Form.Field>
          <Form.Input
            type="text"
            name="title"
            value={state.title}
            onChange={handleOnChangeInput}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            type="date"
            name="due"
            value={state.due}
            onChange={handleOnChangeInput}
          />
        </Form.Field>
        {milestoneCreateError && (<div>{JSON.stringify(milestoneCreateError)}</div>)}
        <Button
          loading={milestoneCreating}
          type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
}

const mapStateToProps = (state) => ({
  milestones: state.firestore.data.milestones,
  milestoneCreating: state.groups.addGroupMilestone.creating,
  milestoneCreateError: state.groups.addGroupMilestone.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddGroupMilestone: (groupId, title, due) =>
    dispatch(addMilestoneToFirebase(groupId, title, due)),
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
  connect(mapStateToProps, mapDispatchToProps)
)(Milestones);
