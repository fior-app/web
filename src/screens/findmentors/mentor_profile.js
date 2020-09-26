import React, { useEffect } from 'react';
import { getMentor } from "../../store/actions/userActions";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  Button, Confirm,
  Container,
  Grid,
  Header, Icon,
  Image, Label, LabelDetail, Modal,
} from "semantic-ui-react";
import profileStyles from '../../styles/profile.module.css';
import styles from "../../styles/profile.module.css";
import SelectCategories from "../../components/categories/select_categories";
import VerifySkill from "../profile/verify/verify_skill";
import CreateMentorspace from "../mentorspaces/create/create_mentorspace";

const MentorProfile = ({
  mentor,
  loading,
  error,
  fetchMentor,
}) => {

  const defAvatarUrl = 'https://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg';

  const { userId } = useParams();

  useEffect(() => {
    fetchMentor(userId)
  }, [userId, fetchMentor])

  console.log(mentor)

  return (
    <Container>
      <Grid columns="equal">
        <Grid.Row>
          <Link to="/mentors">← Back to Find Mentors</Link>
        </Grid.Row>
        <Grid.Column width={4}>
          <div>
            <Image className={profileStyles.avatar}
                   src={mentor && mentor.profilePicture ? mentor.profilePicture : defAvatarUrl}
                   alt="avatar" circular/>
          </div>

          <h2>{mentor && mentor.user.name}</h2>
          <p>{mentor && mentor.user.bio ? mentor.user.bio : 'Something interesting'}</p>

          <Grid.Row className={profileStyles.section_wrapper}>
            <h3>Organizations</h3>
            <div>You havent joined to any organization yet</div>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Header as='h3'>
              Mentor Profile
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Grid columns="equal">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Grid.Row className={profileStyles.section_wrapper}>
                    <h3>Contact</h3>
                    <Button primary>Send a Email</Button>
                  </Grid.Row>
                  <Grid.Row className={profileStyles.section_wrapper}>
                    <h3>Skills</h3>
                    {mentor &&
                    mentor.skills.length > 0
                      ? mentor.skills.map((userSkill) => (
                        <Label key={userSkill.id} image>
                          {userSkill.skill.name}
                          {userSkill.isVerified
                            ? <LabelDetail>Verified</LabelDetail>
                            : <VerifySkill userskillId={userSkill.id} skill={userSkill.skill}/>}
                        </Label>
                      )) : <div>Mentor dont have any skills yet</div>
                    }
                  </Grid.Row>
                  <Grid.Row className={profileStyles.section_wrapper}>
                    <h3>Active Points</h3>
                    <div>Mentor dont have any active points yet</div>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column width={8}>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  mentor: state.user.mentor.mentor,
  loading: state.user.mentor.isLoading,
  error: state.user.mentor.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMentor: (mentorId) => dispatch(getMentor(mentorId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MentorProfile);
