import React, { useState } from 'react';
import {
  Button,
  Divider, Grid, Header, Icon, Message, Modal,
} from 'semantic-ui-react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from '../../../../styles/calendar.module.css';
import AddEditMilestone from '../milestones/add_edit_milestone';
import AddEditMeetings from '../meetings/add_edit_meetings';

const Calendar = ({ milestones, meetings }) => {
  const initialState = {
    selectedDate: '',
  };

  const [state, setState] = useState(initialState);

  const [isModalOpen, setModalOpen] = useState(false);

  const { mentorspaceId } = useParams();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCellOnClick = (e) => {
    setState({ selectedDate: e.dateStr });
    openModal();
  };

  if (milestones && meetings) {
    let events = Object.values(milestones).map((milestone) => ({
      title: milestone.title,
      date: milestone.due,
      color: '#02c39a',
    }));

    events = events.concat(Object.values(meetings).map((meeting) => ({
      title: meeting.title,
      date: meeting.on,
      color: '#2185d0',
    })));

    return (
      <>
        <Header as="h2">Timeline</Header>
        <Divider />
        <div className={styles.legend}>
          <div className={styles.row}>
            <div className={styles.milestones_block} />
            <div className={styles.spacer_sm} />
            Milestones
          </div>
          <div className={styles.row}>
            <div className={styles.meetings_block} />
            <div className={styles.spacer_sm} />
            Meetings
          </div>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleCellOnClick}
        />
        <Modal
          basic
          size="small"
          onClose={closeModal}
          open={isModalOpen}
        >
          <Modal.Header>
            What do you want to add on
            {' '}
            {state.selectedDate}
            {'?'}
          </Modal.Header>
          <Modal.Content>
            <div className={styles.modal_row}>
              <div>
                <AddEditMilestone
                  mentorspaceId={mentorspaceId}
                  date={state.selectedDate}
                  trigger={(open) => (
                    <Button inverted color="green" onClick={open} fluid>
                      <Icon name="plus" />
                      Milestone
                    </Button>
                  )}
                />
              </div>
              <div className={styles.spacer_lg} />
              <div>
                <AddEditMeetings
                  mentorspaceId={mentorspaceId}
                  date={state.selectedDate}
                  trigger={(open) => (
                    <Button inverted color="blue" onClick={open} fluid>
                      <Icon name="plus" />
                      Meeting
                    </Button>
                  )}
                />
              </div>
            </div>
          </Modal.Content>
        </Modal>
      </>
    );
  }

  return <div>loading</div>;
};

const mapStateToProps = (state) => ({
  milestones: state.firestore.data.milestones,
  meetings: state.firestore.data.meetings,
});

export default compose(firestoreConnect((props) => [
  {
    collection: 'milestones',
    limit: 25,
    where: ['groupId', '==', props.match.params.mentorspaceId],
  },
  {
    collection: 'meetings',
    limit: 25,
    where: ['groupId', '==', props.match.params.mentorspaceId],
  },
]), connect(mapStateToProps, null))(Calendar);
