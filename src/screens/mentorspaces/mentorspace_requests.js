import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header, Item } from 'semantic-ui-react';

import { getMentorspaceRequests } from '../../store/actions/mentorspaceActions';
import GroupConfirm from './mentorspace_details/group_confrim';
import EmptyPlaceholder from '../../components/placeholder/empty_placeholder';

const MentorspaceRequests = ({
  mentorspaces,
  loading,
  error,
  dispatchGetMentorspaceRequests,
}) => {
  useEffect(() => {
    dispatchGetMentorspaceRequests();
  }, [dispatchGetMentorspaceRequests]);

  console.log(mentorspaces);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        mentorspaces.length > 0

          ? (
            <Item.Group divided>
              {mentorspaces.map((mentorspaceItem) => (
                <Item key={mentorspaceItem.id}>
                  <Item.Content>
                    <Item.Header as="a">{mentorspaceItem.group.name}</Item.Header>
                    <Item.Meta>
                      <span>
                        {mentorspaceItem.permissions.includes('MENTOR') ? 'Mentor' : 'Member'}
                      </span>
                    </Item.Meta>
                    <Item.Description>{mentorspaceItem.group.description}</Item.Description>
                    {mentorspaceItem.comment && (
                    <>
                      <Header as="h4">
                        Additional Comments
                      </Header>
                      <Item.Description>{mentorspaceItem.comment}</Item.Description>
                    </>
                    )}
                    <Item.Extra>
                      <GroupConfirm groupId={mentorspaceItem.group.id} />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
          ) : <EmptyPlaceholder text="No new notifications" />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.groups.groupsRequests.loading,
  mentorspaces: state.groups.groupsRequests.groups,
  error: state.groups.groupsRequests.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetMentorspaceRequests: () => dispatch(getMentorspaceRequests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MentorspaceRequests);
