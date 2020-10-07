import React, { useState } from 'react';
import {
  Button, Icon, Form, Loader, Confirm, Popup,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateTasksMilestoneOnFirebase } from '../../../../store/actions/mentorspaceActions';
import styles from '../../../../styles/mentorspace-milestone.module.css';

const MilestoneSubtasks = ({
  milestone,
  loading,
  dispatchUpdateTasksMilestone,
}) => {
  const initialState = {
    isAdding: false,
    editingTask: '',
    deleteIndex: -1,
    editIndex: -1,
  };

  const [state, setState] = useState(initialState);

  const handleAddTask = () => {
    const tasks = milestone.tasks ? [...milestone.tasks] : [];
    tasks.push({ done: false, title: state.editingTask });

    dispatchUpdateTasksMilestone(milestone.id, tasks);
    setState((oldState) => ({ ...oldState, editingTask: '' }));
  };

  const onOpenAddTask = () => {
    setState((oldState) => ({
      ...oldState, isAdding: true, editIndex: -1, editingTask: '',
    }));
  };

  const onCloseAddTask = () => {
    setState((oldState) => ({ ...oldState, isAdding: false }));
  };

  const onOpenEditTask = (index, task) => {
    setState((oldState) => ({
      ...oldState, editIndex: index, isAdding: false, editingTask: task,
    }));
  };

  const onCloseEditTask = () => {
    setState((oldState) => ({ ...oldState, editIndex: -1 }));
  };

  const onOpenDeleteTask = (index) => {
    setState((oldState) => ({ ...oldState, deleteIndex: index }));
  };

  const onCloseDeleteTask = () => {
    setState((oldState) => ({ ...oldState, deleteIndex: -1 }));
  };

  const handleTaskChange = (index, value) => {
    const tasks = [...milestone.tasks];
    const item = { ...tasks[index] };
    item.done = value;
    tasks[index] = item;

    dispatchUpdateTasksMilestone(milestone.id, tasks);
  };

  const handleTaskDelete = (index) => {
    const tasks = milestone.tasks ? [...milestone.tasks] : [];

    if (index > -1 && index < tasks.length) {
      tasks.splice(index, 1);
    }

    dispatchUpdateTasksMilestone(milestone.id, tasks);
    onCloseDeleteTask();
  };

  const handleEditTask = (index) => {
    const tasks = [...milestone.tasks];
    const item = { ...tasks[index] };
    item.title = state.editingTask;
    tasks[index] = item;

    dispatchUpdateTasksMilestone(milestone.id, tasks);
    onCloseEditTask();
  };

  return (
    <>
      <div>
        {milestone.tasks && milestone.tasks.map((task, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={styles.milestone_subtask}>
            {state.editIndex !== index && (
              <>
                <Popup
                  trigger={(
                    <Form.Checkbox
                      label={task.title}
                      checked={task.done}
                      onChange={(e, { checked }) => handleTaskChange(index, checked)}
                    />
                  )}
                  flowing
                  hoverable
                  position="right center"
                >
                  <Button
                    icon
                    labelPosition="left"
                    size="mini"
                    onClick={() => onOpenEditTask(index, task.title)}
                  >
                    <Icon name="edit"/>
                    Edit
                  </Button>
                  <Button
                    icon
                    labelPosition="left"
                    size="mini"
                    onClick={() => onOpenDeleteTask(index)}
                  >
                    <Icon name="delete"/>
                    Delete
                  </Button>
                </Popup>
              </>
            )}
            {state.editIndex === index && (
              <Form onSubmit={() => {
                handleEditTask(index);
              }}
              >
                <Form.Input
                  type="text"
                  label="Task"
                  inline
                  value={state.editingTask}
                  onChange={(e, { value }) => setState((oldState) => ({ ...oldState, editingTask: value }))}
                />
                <Button type="submit">Update</Button>
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
      {!state.isAdding ? (
        <div className={styles.milestone_subtask_add}>
          <Button icon labelPosition="left" size="mini" onClick={onOpenAddTask}>
            <Icon name="add"/>
            Task
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleAddTask}>
          <Form.Input
            type="text"
            label="Task"
            inline
            value={state.editingTask}
            onChange={(e, { value }) => setState((oldState) => ({ ...oldState, editingTask: value }))}
          />
          <Button type="submit">Add</Button>
          <Button onClick={onCloseAddTask}>Cancel</Button>
        </Form>
      )}
      <div className={styles.milestone_subtask_loader}>
        {loading === milestone.id && (<Loader active inline size="mini"/>)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.groups.updateTasksMilestone.loading,
  error: state.groups.updateTasksMilestone.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateTasksMilestone: (groupId, tasks) => dispatch(updateTasksMilestoneOnFirebase(groupId, tasks)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MilestoneSubtasks);
