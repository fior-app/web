import React from "react";
import { Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className='footer-container'>
      <Grid container columns='equal'>
        <Grid.Row>
          <Grid.Column className='footer_grid_column'>
            <h3 className='footer_item_heading'>Fior</h3>
            <div className='footer_column_item'>Find Mentors</div>
            <div className='footer_column_item'>Find Mentees</div>
            <div className='footer_column_item'>Question Forum</div>
            <div className='footer_column_item'>Blog</div>
            <div className='footer_column_item'>Pricing Plan</div>
            <div className='footer_column_item'>Public Users</div>
          </Grid.Column>
          <Grid.Column className='footer_grid_column'>
            <h3 className='footer_item_heading'>Products</h3>
            <div className='footer_column_item'>Groups</div>
            <div className='footer_column_item'>Organizations</div>
          </Grid.Column>
          <Grid.Column className='footer_grid_column'>
            <h3 className='footer_item_heading'>About Us</h3>
            <div className='footer_column_item'>About Fior</div>
            <div className='footer_column_item'>Privacy Policy</div>
            <div className='footer_column_item'>Help</div>
            <div className='footer_column_item'>Contact Us</div>
          </Grid.Column>
          <Grid.Column width={6} className='footer_grid_column'>
            <Grid columns='equal'>
              <Grid.Row>
                <a
                  href='https://www.facebook.com/fior'
                  target='blank'
                  className='social-container'
                >
                  <img
                    src='../../assets/icons/facebook.svg'
                    alt='Fior - Facebook'
                    className='social_icon'
                  />
                </a>
                <a
                  href='https://www.twitter.com/fior'
                  target='blank'
                  className='social-container'
                >
                  {/* <Icon name='twitter square' color='black' size='big' /> */}
                  <img
                    src='../../assets/icons/twitter.svg'
                    alt='Fior - Twitter'
                    className='social_icon'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/fior'
                  target='blank'
                  className='social-container'
                >
                  {/* <Icon name='linkedin' color='black' size='big' /> */}
                  <img
                    src='../../assets/icons/linkedin-logo.svg'
                    alt='Fior - LinkedIn'
                    className='social_icon'
                  />
                </a>
                <a
                  href='https://www.instagram.com/fior'
                  target='blank'
                  className='social-container'
                >
                  {/* <Icon name='instagram' color='black' size='big' /> */}
                  <img
                    src='../../assets/icons/instagram.svg'
                    alt='Fior - Instagram'
                    className='social_icon'
                  />
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
