import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import styles from '../../styles/footer.module.css';

const Footer = () => (
  <div className={styles.footer_container}>
    <Grid container columns="equal">
      <Grid.Row>
        <Grid.Column className="footer_grid_column">
          <h3 className={styles.footer_item_heading}>Fior</h3>
          <div className={styles.footer_column_item}>Find Mentors</div>
          <div className={styles.footer_column_item}>Find Mentees</div>
          <div className={styles.footer_column_item}>Question Forum</div>
          <div className={styles.footer_column_item}>Blog</div>
          <div className={styles.footer_column_item}>Pricing Plan</div>
          <div className={styles.footer_column_item}>Public Users</div>
        </Grid.Column>
        <Grid.Column className="footer_grid_column">
          <h3 className={styles.footer_item_heading}>Products</h3>
          <div className={styles.footer_column_item}>Groups</div>
          <div className={styles.footer_column_item}>Organizations</div>
        </Grid.Column>
        <Grid.Column className="footer_grid_column">
          <h3 className={styles.footer_item_heading}>About Us</h3>
          <div className={styles.footer_column_item}>About Fior</div>
          <div className={styles.footer_column_item}>Privacy Policy</div>
          <div className={styles.footer_column_item}>Help</div>
          <div className={styles.footer_column_item}>Contact Us</div>
        </Grid.Column>
        <Grid.Column width={6} className="footer_grid_column">
          <Grid columns="equal">
            <Grid.Row>
              <a
                href="https://www.facebook.com/fior"
                target="blank"
                className={styles.social_container}
              >
                <Icon
                  name="facebook"
                  size="big"
                  className={styles.social_icon}
                />
              </a>
              <a
                href="https://www.twitter.com/fior"
                target="blank"
                className={styles.social_container}
              >
                <Icon
                  name="twitter"
                  size="big"
                  className={styles.social_icon}
                />
              </a>
              <a
                href="https://www.linkedin.com/fior"
                target="blank"
                className={styles.social_container}
              >
                <Icon
                  name="linkedin"
                  size="big"
                  className={styles.social_icon}
                />
              </a>
              <a
                href="https://www.instagram.com/fior"
                target="blank"
                className={styles.social_container}
              >
                <Icon
                  name="instagram"
                  size="big"
                  className={styles.social_icon}
                />
              </a>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Footer;
