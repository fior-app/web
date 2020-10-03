import React, { useState } from 'react';
import { Button, Icon, Form, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateTasksMilestoneOnFirebase } from "../../../../store/actions/mentorspaceActions";

const MilestoneSubtasks = ({
  milestone,
  loading,
  dispatchUpdateTasksMilestone
}) => {
  const initialState = {
    isAdding: false,
    newTask: '',
  }

  const [state, setState] = useState(initialState);

  const handleTaskChange = (index, value) => {
    let tasks = [...milestone.tasks];
    let item = { ...tasks[index] };
    item.done = value;
    tasks[index] = item;

    dispatchUpdateTasksMilestone(milestone.id, tasks);
  }

  const handleAddTask = () => {
    let tasks = milestone.tasks ? [...milestone.tasks] : [];
    tasks.push({ done: false, title: state.newTask })

    dispatchUpdateTasksMilestone(milestone.id, tasks)
    setState((state) => ({ ...state, newTask: '' }))
  }

  return (
    <>
      <Form>
        {milestone.tasks && milestone.tasks.map((task, index) => (
          <Form.Checkbox
            key={index}
            label={task.title}
            checked={task.done}
            onChange={(e, { checked }) => handleTaskChange(index, checked)}
          />
        ))}
      </Form>
      {loading === milestone.id && (<Loader active inline size={"mini"} />)}
      {!state.isAdding ? (
        <Button icon labelPosition='left' size={"mini"} onClick={() => {
          setState((state) => ({ ...state, isAdding: true, newTask: '' }))
        }}>
          <Icon name='add'/>
          Task
        </Button>
      ) : (
        <Form onSubmit={handleAddTask}>
          <Form.Input
            type="text"
            label="Task"
            inline
            value={state.newTask}
            onChange={(e, { value }) =>
              setState((state) => ({ ...state, newTask: value }))
            }/>
          <Button type='submit'>Add</Button>
          <Button onClick={() => {
            setState((state) => ({ ...state, isAdding: false }))
          }}>Cancel</Button>
        </Form>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.groups.updateTasksMilestone.loading,
  error: state.groups.updateTasksMilestone.error
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateTasksMilestone: (groupId, tasks) =>
    dispatch(updateTasksMilestoneOnFirebase(groupId, tasks)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MilestoneSubtasks);
