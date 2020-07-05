import React from "react";
import { Grid, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className='footer-container'>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column stretched>
            <h3>Fior</h3>
            <div>Find Mentors</div>
            <div>Find Mentees</div>
            <div>Question Forum</div>
            <div>Blog</div>
            <div>Pricing Plan</div>
            <div>Public Users</div>
          </Grid.Column>
          <Grid.Column>
            <h3>Products</h3>
            <div>Groups</div>
            <div>Organizations</div>
          </Grid.Column>
          <Grid.Column>
            <h3>About Us</h3>
            <div>About Fior</div>
            <div>Privacy Policy</div>
            <div>Help</div>
            <div>Contact Us</div>
          </Grid.Column>
          <Grid.Column width={6}>
            <Grid columns='equal'>
              <Grid.Row>
                <a
                  href='https://www.facebook.com/fior'
                  target='blank'
                  className='social-container'
                >
                  <Icon name='facebook' color='black' size='big' />
                </a>
                <a
                  href='https://www.twitter.com/fior'
                  target='blank'
                  className='social-container'
                >
                  <Icon name='twitter square' color='black' size='big' />
                </a>
                <a
                  href='https://www.linkedin.com/fior'
                  target='blank'
                  className='social-container'
                >
                  <Icon name='linkedin' color='black' size='big' />
                </a>
                <a
                  href='https://www.instagram.com/fior'
                  target='blank'
                  className='social-container'
                >
                  <Icon name='instagram' color='black' size='big' />
                </a>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Footer;
