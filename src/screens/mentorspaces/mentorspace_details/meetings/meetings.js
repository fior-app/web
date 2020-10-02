import React from 'react';
import { Divider, Header } from 'semantic-ui-react';

import { useParams } from 'react-router-dom';
import styles from '../../../../styles/mentorspace-meetings.module.css';
import AddEditMeetings from './add_edit_meetings';

const Meetings = () => {
  const { mentorspaceId } = useParams();

  return (
    <fragment>
      <div className={styles.milestone_header}>
        <Header as="h2" floated="left">Meetings</Header>
        <AddEditMeetings mentorspaceId={mentorspaceId} />
      </div>
      <Divider />
    </fragment>
  );
};

export default Meetings;
