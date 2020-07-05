import React, { Component } from "react";
import {
  Button,
  Image,
  Icon,
  Accordion,
  Grid,
  Card,
  Label,
} from "semantic-ui-react";
import "./profile.css";

class ProfileScreen extends Component {
  state = {
    avatarUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/614048c0-c5eb-4425-909d-b4b94a056889/d9qrtqu-2c8cf920-5677-4a26-b38e-5f266bb729c2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82MTQwNDhjMC1jNWViLTQ0MjUtOTA5ZC1iNGI5NGEwNTY4ODkvZDlxcnRxdS0yYzhjZjkyMC01Njc3LTRhMjYtYjM4ZS01ZjI2NmJiNzI5YzIucG5nIn1dXX0.dz27iBtJfcBnA31q1-E3L2OHzavq_1S_Sl7oCNUBHTQ",
  };

  render() {
    const { avatarUrl } = this.state;

    return (
      <div className='container'>
        {/* <div className='row end'>
          <Button>Switch to mentor profile</Button>
        </div>
        <div className='v-spacer-2'></div>
        <div className='center'>
          <Image src={avatarUrl} size='small' circular />
        </div>
        <div className='v-spacer-2'></div>
        <div className='center'>
          <h1>Name</h1>
        </div>
        <div className='v-spacer'></div>
        <div className='row center v-align'>
          <Icon name='edit outline' />
          <div className='spacer-1'></div>
          <div>Edit profile</div>
        </div>
        <div className='v-spacer-2'></div>
        <Accordion
          defaultActiveIndex={[0, 2]}
          panels={panels}
          exclusive={false}
          fluid
          styled
        /> */}

        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Button>Mentor Profile</Button>
            </Grid.Column>

            <Grid.Column>
              <Button>Mentee Profile</Button>
            </Grid.Column>

            <Grid.Column>
              <Button>Profile Settings</Button>
            </Grid.Column>

            <Grid.Column width={8}></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image src={avatarUrl} size='small' circular />
            </Grid.Column>
            <Grid.Column width={8}>
              <h2>John Doe</h2>
              <h4>Software Engineer at WSO2</h4>
              <Label>Javascript</Label>
              <Label>DevOps</Label>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Activity</Card.Header>
                  <Card.Description>
                    You don't have any activity yet
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <div>
                <h2>Groups</h2>
                <div className='v-spacer-2'></div>
                <div>You haven't joined to any group yet</div>
                <div className='v-spacer-2'></div>
              </div>
              <div className='v-spacer-4'></div>
              <div>
                <h2>Organizations</h2>
                <div className='v-spacer-2'></div>
                <div>You haven't joined to any organization yet</div>
                <div className='v-spacer-2'></div>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div>
                <h2>Skills</h2>
                <div className='divider-color'></div>
                <div className='v-spacer-2'></div>
                <div>You don't have added any skills yet</div>
                <div className='v-spacer-2'></div>
              </div>
              <div className='v-spacer-4'></div>
              <div>
                <h2>Medals</h2>
                <div className='divider-color'></div>
                <div className='v-spacer-2'></div>
                <div>You don't have added any medals yet</div>
                <div className='v-spacer-2'></div>
              </div>
              <div className='v-spacer-4'></div>
              <div>
                <h2>Active Points</h2>
                <div className='divider-color'></div>
                <div className='v-spacer-2'></div>
                <div>You don't have added any active points yet</div>
                <div className='v-spacer-2'></div>
              </div>
              <div className='v-spacer-4'></div>
              <div>
                <h2>Feedbacks</h2>
                <div className='divider-color'></div>
                <div className='v-spacer-2'></div>
                <div>You haven't recieved any feedback yet</div>
                <div className='v-spacer-2'></div>
              </div>
              <div className='v-spacer-4'></div>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ProfileScreen;
