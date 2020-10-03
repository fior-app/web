import React, { useState } from 'react';
import { Button, Icon, Form, Loader, Confirm, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateTasksMilestoneOnFirebase } from "../../../../store/actions/mentorspaceActions";
import styles from "../../../../styles/mentorspace-milestone.module.css";

const MilestoneSubtasks = ({
  milestone,
  loading,
  dispatchUpdateTasksMilestone
}) => {
  const initialState = {
    isAdding: false,
    newTask: '',
    deleteIndex: -1,
    editIndex: -1,
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

  const handleTaskDelete = (index) => {
    let tasks = milestone.tasks ? [...milestone.tasks] : [];

    if (index > -1 && index < tasks.length) {
      tasks.splice(index, 1);
    }

    dispatchUpdateTasksMilestone(milestone.id, tasks);
    closeDeleteTaskModal();
  }

  const closeDeleteTaskModal = () => {
    setState((state) => ({ ...state, deleteIndex: -1 }))
  }

  return (
    <>
      <Form>
        {milestone.tasks && milestone.tasks.map((task, index) => (
          <div key={index} className={styles.milestone_subtask}>
            <Form.Checkbox
              label={task.title}
              checked={task.done}
              onChange={(e, { checked }) => handleTaskChange(index, checked)}
            />
            <Icon
              name="edit"
              onClick={() => setState((state) => ({ ...state, editIndex: index }))}
            />

            <Icon
              name="close"
              onClick={() => setState((state) => ({ ...state, deleteIndex: index }))}
            />
            <Confirm
              open={state.deleteIndex === index}
              onCancel={closeDeleteTaskModal}
              onConfirm={() => {
                handleTaskDelete(index);
              }}
            />
          </div>
        ))}
      </Form>
      {loading === milestone.id && (<Loader active inline size={"mini"}/>)}
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
