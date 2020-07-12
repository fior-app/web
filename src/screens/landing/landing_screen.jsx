import React, { Component } from "react";

class LandingScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          {/* Header */}
          <div className='landing_header'>
            <div className='landing_content row'>

              {/* Bg Doodle */}
              <img src="../../assets/img/landing_vector.svg" alt="Mentoring Platform For Computer Science Students" className='landing_content_left' />

              {/* Col Right */}
              <div className='landing_content_right column'>
                <pre>Looking for a mentor?<br /><span>Or</span><br />Want to become a mentor?</pre>
                <button className='secondary_btn'>Become a member</button>
              </div>
              {/* End of Col Right */}

            </div>
          </div>
          {/* End of Header */}

          {/* Landing Page Body */}
          <div className='landing_body'>

            {/* Content Row 1 */}
            <div className='content_card1'>
              <h3>Online Mentoring Platform</h3>
              <div className='row'>

                {/* Left Card */}
                <div className='left_card'>
                  <h4>Find Mentors</h4>
                  <img src="../../assets/img/mentor.svg" alt="Find Mentors" />
                  <p>Get assistance for your individual or group projects from experts</p>
                  <a href='#'>Find Mentors</a>
                </div>
                {/* End of Left Card */}

                {/* Right Card */}
                <div className='right_card'>
                  <h4>Find Mentees</h4>
                  <img src="../../assets/img/student.svg" alt="Find Mentees" />
                  <p>Be a guide to a mentee on their individual or group project</p>
                  <a href='#'>Find Mentees</a>
                </div>
                {/* End of Right Card */}

              </div>
            </div>
            {/* End Of Content Row 1 */}

            {/* Content Row 2 */}
            <div className='content_card2 '>
              <h3>Mentorspace</h3>
              <div className='row'>

                {/* Left Card */}
                <div className='left_card'>
                  <h4>Find Mentors</h4>
                  <img src="../../assets/img/project-management.svg" alt="Project Management" />
                  <p>The essential project management tools to complete your project</p>
                </div>
                {/* End of Left Card */}

                {/* Right Card */}
                <div className='right_card'>
                  <h4>Find Mentees</h4>
                  <img src="../../assets/img/video-call.svg" alt="In-App Communication" />
                  <p>Chat threads and video conference facilities to make it easy</p>
                </div>
                {/* End of Right Card */}

              </div>
            </div>
            {/* End of Content Row 2 */}

            {/* Detail Card 1 */}
            <div className='detail_card1 row'>
              <img src="../../assets/img/verified.svg" alt="Verified Assistant In Learning" />
              <div className='column'>
                <p><span>Verifed Assistant In Learning</span><br />Complete tasks to get skill 
                validations before mentoring your mentee or the group of mentees</p>
              </div>
            </div>
            {/* End of Detail Card 1 */}

            {/* Detail Card 2 */}
            <div className='detail_card2 row'>
              <div className='column'>
                <p><span>Rewards And Certificates</span><br />Complete tasks to achieve 
                targets and obtain rewards and showcase in your profile</p>
              </div>
              <img src="../../assets/img/medal.svg" alt="Rewards And Certificates" />
            </div>
            {/* End of Detail Card 2 */}

            {/* Detail Card 1 */}
            <div className='detail_card3 row'>
              <img src="../../assets/img/cv.svg" alt="Personal Reputation" />
              <div className='column'>
                <p><span>Personal Reputation</span><br />Share your public profile on 
                your resume to gain personal reputation for yourself</p>
              </div>
            </div>
            {/* End of Detail Card 1 */}

          </div>
          {/* End of Landing Page Body */}

        </div>
      </React.Fragment>
    );
  }
}

export default LandingScreen;
