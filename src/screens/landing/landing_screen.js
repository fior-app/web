import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './landing_screen.module.css';

const LandingScreen = () => (
  <>
    <div className={styles.container}>
      <div className={styles.landing_container}>
        {/* Header */}
        <div className={styles.landing_header}>
          <div className={styles.landing_content}>
            {/* Bg Doodle */}
            <img
              src="../../assets/img/landing_vector.png"
              alt="Mentoring Platform For Computer Science Students"
              className={styles.landing_content_left}
            />

            {/* Col Right */}
            <div className={styles.landing_content_right}>
              <pre>
                Looking for a mentor?
                <br />
                <span>Or</span>
                <br />
                Want to become a mentor?
              </pre>
              {/* <button type="button" className="secondary_btn"> */}
              {/* Become a member */}
              {/* </button> */}
              {/* TODO */}
              <button className="ui teal button">Become a member</button>
            </div>
            {/* End of Col Right */}
          </div>
        </div>
        {/* End of Header */}

        {/* Landing Page Body */}
        <div className={styles.landing_body}>
          {/* Content Row 1 */}
          <div className={styles.landing_content_card1}>
            <h3>Online Mentoring Platform</h3>
            <div className={styles.row}>
              {/* Left Card */}
              <div className={styles.landing_left_card}>
                <h4>Find Mentors</h4>
                <img src="../../assets/img/mentor.svg" alt="Find Mentors" />
                <p>
                  Get assistance for your individual or group projects from
                  experts
                </p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Find Mentors</a>
              </div>
              {/* End of Left Card */}

              {/* Right Card */}
              <div className={styles.landing_right_card}>
                <h4>Find Mentees</h4>
                <img src="../../assets/img/student.svg" alt="Find Mentees" />
                <p>
                  Be a guide to a mentee on their individual or group project
                </p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Find Mentees</a>
              </div>
              {/* End of Right Card */}
            </div>
          </div>
          {/* End Of Content Row 1 */}

          {/* Content Row 2 */}
          <div className={styles.landing_content_card2}>
            <h3>Mentorspace</h3>
            <div className={styles.row}>
              {/* Left Card */}
              <div className={styles.landing_left_card}>
                <h4>Find Mentors</h4>
                <img
                  src="../../assets/img/project-management.svg"
                  alt="Project Management"
                />
                <p>
                  The essential project management tools to complete your
                  project
                </p>
              </div>
              {/* End of Left Card */}

              {/* Right Card */}
              <div className={styles.landing_right_card}>
                <h4>Find Mentees</h4>
                <img
                  src="../../assets/img/video-call.svg"
                  alt="In-App Communication"
                />
                <p>
                  Chat threads and video conference facilities to make it easy
                </p>
              </div>
              {/* End of Right Card */}
            </div>
          </div>
          {/* End of Content Row 2 */}

          {/* Details Cards Section */}
          <div className={styles.landing_detail_cards}>
            {/* Detail Card 1 */}
            <div className={styles.landing_detail_card1}>
              <img
                src="../../assets/img/verified.svg"
                alt="Verified Assistant In Learning"
              />
              <div className={styles.column}>
                <p>
                  <span>Verifed Assistant In Learning</span>
                  <br />
                  Complete tasks to get skill validations before mentoring your
                  mentee or the group of mentees
                </p>
              </div>
            </div>
            {/* End of Detail Card 1 */}

            {/* Detail Card 2 */}
            <div className={styles.landing_detail_card2}>
              <div className="column">
                <p>
                  <span>Rewards And Certificates</span>
                  <br />
                  Complete tasks to achieve targets and obtain rewards and
                  showcase in your profile
                </p>
              </div>
              <img
                src="../../assets/img/medal.svg"
                alt="Rewards And Certificates"
              />
            </div>
            {/* End of Detail Card 2 */}

            {/* Detail Card 3 */}
            <div className={styles.landing_detail_card3}>
              <img src="../../assets/img/cv.svg" alt="Personal Reputation" />
              <div className={styles.column}>
                <p>
                  <span>Personal Reputation</span>
                  <br />
                  Share your public profile on your resume to gain personal
                  reputation for yourself
                </p>
              </div>
            </div>
            {/* End of Detail Card 3 */}
          </div>
          {/* End of Details Cards Section */}

          {/* Group and Org Section */}
          <div className={styles.landing_group_org_section}>
            <div className={styles.row}>
              <div className={styles.landing_group_section}>
                <h3>Groups</h3>
                <img src="../../assets/img/group.svg" alt="Groups" />
                <div className={styles.landing_details}>
                  <img src="../../assets/img/check.svg" alt="Check Mark" />
                  <p>Connect with your project team for smooth collaboration</p>
                </div>
              </div>

              <div className={styles.landing_org_section}>
                <h3>Organizations</h3>
                <img src="../../assets/img/org.svg" alt="Organizations" />
                <div className={styles.landing_details_section}>
                  <div className={styles.landing_details}>
                    <img src="../../assets/img/check.svg" alt="Check Mark" />
                    <p>The ideal platform for your institution or business</p>
                  </div>
                  <div className={styles.landing_details}>
                    <img src="../../assets/img/check.svg" alt="Check Mark" />
                    <p>Unlimited member access</p>
                  </div>
                  <div className={styles.landing_details}>
                    <img src="../../assets/img/check.svg" alt="Check Mark" />
                    <p>100% private</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Group and Org Section */}

          {/* Public Forum Section */}
          <div className={styles.landing_public_forums_section}>
            <h3>Public Forums</h3>
            <p className={styles.landing_forum_description}>
              Share your questions or your experience
            </p>

            {/* Public Forum Content */}
            <div className={styles.landing_public_forum_content}>
              {/* Question Forum Section */}
              <div className={styles.landing_question_forum_section}>
                <h4>Question Forum</h4>
                <img src="../../assets/img/question.svg" alt="Question Forum" />
                <p className={styles.landing_question_description}>
                  Help others to find answers and get help
                </p>
              </div>
              {/* End of Question Forum Section */}

              {/* Blog Section */}
              <div className={styles.landing_blog_section}>
                <h4>Blog</h4>
                <img src="../../assets/img/blog.svg" alt="Blog" />
                <p className={styles.landing_blog_description}>
                  Discover and share new stuff
                </p>
              </div>
              {/* End of Blog Section */}
            </div>
            {/* End of Public Forum Content */}
          </div>
          {/* End of Public Forum Section */}

          {/* Pricing Plan */}
          <div className={styles.landing_pricing_plan_bg}>
            <div className={styles.landing_pricing_plan}>
              <h3 className={styles.landing_pricing_main_h3}>Pricing Plan</h3>
              <p className={styles.landing_pricing_main_p}>
                Unlock many more features and resources
              </p>

              {/* Pricing Plan Packages */}
              <div className={styles.landing_pricing_packages}>
                {/* Free Package */}
                <div className={styles.landing_package1}>
                  <h4>Free</h4>

                  <div className={styles.landing_pricing_content1}>
                    <div className={styles.landing_pricing_description1}>
                      <img src="../../assets/img/check.svg" alt="Check Mark" />
                      <p className={styles.landing_pricing_point}>
                        Create 2 groups
                      </p>
                    </div>
                    <div className={styles.landing_pricing_description}>
                      <img src="../../assets/img/check.svg" alt="Check Mark" />
                      <p className={styles.landing_pricing_point}>
                        Add maximum 5 members per group
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of Free Package */}

                {/* Standard Package */}
                <div className={styles.landing_package2}>
                  <h4>Standard</h4>
                  <p className={styles.landing_price1}>
                    <span>$6</span>
                    <br />
                    (One-time payment)
                  </p>

                  <div className={styles.landing_pricing_content2}>
                    <div className={styles.landing_pricing_description1}>
                      <img src="../../assets/img/check.svg" alt="Check Mark" />
                      <p className={styles.landing_pricing_point}>
                        Create 10 groups
                      </p>
                    </div>
                    <div className={styles.landing_pricing_description}>
                      <img src="../../assets/img/check.svg" alt="Check Mark" />
                      <p className={styles.landing_pricing_point}>
                        Add maximum 10 members per group
                      </p>
                    </div>
                  </div>

                  {/* <button type="button" className="secondary_btn">
                    Choose Plan
                  </button> */}
                  <button className="ui teal button">Choose Plan</button>
                </div>
                {/* End of Standard Package */}

                <div className={styles.landing_package3}>
                  <h4>Enterprise</h4>
                  <p className={styles.landing_price2}>
                    <span>$12</span>
                    <br />
                    (One-time payment)
                  </p>

                  <div className={styles.landing_pricing_content3}>
                    <div className={styles.landing_pricing_description2}>
                      <img src="../../assets/img/check.svg" alt="Check Mark" />
                      <p className={styles.landing_pricing_point1}>
                        Create 1 Organization
                      </p>
                    </div>
                    <div className={styles.landing_pricing_description3}>
                      <img src="../../assets/img/check.svg" alt="Check Mark" />
                      <p className={styles.landing_pricing_point1}>
                        Get unlimited member access for the organization
                      </p>
                    </div>
                    <div className={styles.landing_pricing_description4}>
                      <img src="../../assets/img/check.svg" alt="Check Mark" />
                      <p className={styles.landing_pricing_point1}>
                        Create 100 groups under the organization
                      </p>
                    </div>
                    <div className={styles.landing_pricing_description5}>
                      <img src="../../assets/img/check.svg" alt="Check Mark" />
                      <p className={styles.landing_pricing_point1}>
                        Add maximum 20 members per group
                      </p>
                    </div>
                  </div>

                  {/* <button
                    type="button"
                    className="btn-primary choose-plan-button"
                  >
                    Choose Plan
                  </button> */}
                  <button className="ui white button">Choose Plan</button>
                </div>
              </div>
              {/* End of Pricing Plan Packages */}

              <div className={styles.landing_package4_bg}>
                <div className={styles.landing_package4}>
                  <h3>Partnership</h3>
                  <p className={styles.landing_package4_description}>
                    Request a custom Organization plan and pay as you go
                  </p>
                  {/* <button type="button" className="secondary_btn"> */}
                  {/* Start a plan */}
                  {/* </button> */}
                  <button className="ui teal button">Start a plan</button>
                </div>
              </div>
            </div>
          </div>
          {/* End of Pricing Plan */}
        </div>
        {/* End of Landing Page Body */}
      </div>
    </div>
  </>
);

export default LandingScreen;
