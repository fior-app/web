import React, { useState } from 'react';
import { Button, Icon, Form, Loader, Confirm, Popup } from "semantic-ui-react";
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
    editingTask: '',
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
    tasks.push({ done: false, title: state.editingTask })

    dispatchUpdateTasksMilestone(milestone.id, tasks)
    setState((state) => ({ ...state, editingTask: '' }))
  }

  const handleTaskDelete = (index) => {
    let tasks = milestone.tasks ? [...milestone.tasks] : [];

    if (index > -1 && index < tasks.length) {
      tasks.splice(index, 1);
    }

    dispatchUpdateTasksMilestone(milestone.id, tasks);
    onCloseDeleteTask();
  }

  const handleEditTask = (index) => {
    let tasks = [...milestone.tasks];
    let item = { ...tasks[index] };
    item.title = state.editingTask;
    tasks[index] = item;

    dispatchUpdateTasksMilestone(milestone.id, tasks);
    onCloseEditTask()
  }

  const onOpenAddTask = () => {
    setState((state) => ({ ...state, isAdding: true, editIndex: -1, editingTask: '' }))
  }

  const onCloseAddTask = () => {
    setState((state) => ({ ...state, isAdding: false }))
  }

  const onOpenEditTask = (index, task) => {
    setState((state) => ({ ...state, editIndex: index, isAdding: false, editingTask: task }))
  }

  const onCloseEditTask = () => {
    setState((state) => ({ ...state, editIndex: -1 }))
  }

  const onOpenDeleteTask = (index) => {
    setState((state) => ({ ...state, deleteIndex: index }))
  }

  const onCloseDeleteTask = () => {
    setState((state) => ({ ...state, deleteIndex: -1 }))
  }

  return (
    <>
      <div>
        {milestone.tasks && milestone.tasks.map((task, index) => (
          <div key={index} className={styles.milestone_subtask}>
            {state.editIndex !== index && (
              <>
                <Popup
                  trigger={
                    <Form.Checkbox
                      label={task.title}
                      checked={task.done}
                      onChange={(e, { checked }) => handleTaskChange(index, checked)}
                    />
                  }
                  flowing
                  hoverable
                  position='right center'
                >
                  <Button
                    icon labelPosition='left'
                    size={"mini"}
                    onClick={() => onOpenEditTask(index, task.title)}
                  >
                    <Icon name='edit'/>
                    Edit
                  </Button>
                  <Button
                    icon labelPosition='left'
                    size={"mini"}
                    onClick={() => onOpenDeleteTask(index)}
                  >
                    <Icon name='delete'/>
                    Delete
                  </Button>
                </Popup>
              </>
            )}
            {state.editIndex === index && (
              < Form onSubmit={() => {
                handleEditTask(index)
              }}>
                <Form.Input
                  type="text"
                  label="Task"
                  inline
                  value={state.editingTask}
                  onChange={(e, { value }) =>
                    setState((state) => ({ ...state, editingTask: value }))
                  }/>
                <Button type='submit'>Update</Button>
                <Button onClick={onCloseEditTask}>Cancel</Button>
              </Form>
            )}
            <Confirm
              open={state.deleteIndex === index}
              onCancel={onCloseDeleteTask}
              onConfirm={() => {
                handleTaskDelete(index);
              }}
            />
          </div>
        ))}
      </div>
      {loading === milestone.id && (<Loader active inline size={"mini"}/>)}
      {!state.isAdding ? (
        <Button icon labelPosition='left' size={"mini"} onClick={onOpenAddTask}>
          <Icon name='add'/>
          Task
        </Button>
      ) : (
        <Form onSubmit={handleAddTask}>
          <Form.Input
            type="text"
            label="Task"
            inline
            value={state.editingTask}
            onChange={(e, { value }) =>
              setState((state) => ({ ...state, editingTask: value }))
            }/>
          <Button type='submit'>Add</Button>
          <Button onClick={onCloseAddTask}>Cancel</Button>
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
