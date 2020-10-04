import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { object } from 'prop-types';

const Calendar = ({ milestones, meetings }) => {
  if (milestones && meetings) {
    let events = Object.values(milestones).map((milestone) => ({
      title: milestone.title,
      date: milestone.due,
      color: 'teal',
    }));

    events = events.concat(Object.values(meetings).map((meeting) => ({
      title: meeting.title,
      date: meeting.on,
      color: 'blue',
    })));

    return (
      <>
        <Header as="h2">Timeline</Header>
        <Divider />
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
        />
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
