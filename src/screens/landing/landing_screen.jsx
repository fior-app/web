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
          <div className='landing_body'>
            <div className='content_card1'>
              <h3>Online Mentoring Platform</h3>
              <div className='row'>
                <div className='left_card'>
                  <h4>Find Mentors</h4>
                  <img src="../../assets/img/mentor.svg" alt="Find Mentors" />
                  <p>Get assistance for your individual or group projects from experts</p>
                  <a href='#'>Find Mentors</a>
                </div>
                <div className='right_card'>
                  <h4>Find Mentees</h4>
                  <img src="../../assets/img/mentor.svg" alt="Find Mentors" />
                  <p>Be a guide to a mentee on their individual or group project</p>
                  <a href='#'>Find Mentees</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingScreen;
