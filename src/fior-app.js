import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { REACT_APP_ADMIN_URL } from './config/config';

import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import LandingScreen from './screens/landing/landing_screen';
import Navbar from './components/navbar/navbar_cmp';
import AuthScreen from './screens/auth/auth_screen';
import LinkedInCallbackScreen from './screens/auth/linkedin_callback_screen';
import MentorspacesScreen from './screens/mentorspaces/mentorspaces_screen';
import MentorspaceScreen from './screens/mentorspaces/mentorspace_details/mentorspace_screen';
import ProfileScreen from './screens/profile/profile_screen';
import BlogScreen from './screens/blog/blog_screen';
import NotFound from './screens/notfound/NotFound';

import Footer from './components/footer/footer';

import AuthRequire from './HOC/authRequire';
import UnauthRequire from './HOC/unauthRequire';
import { userMeInitial } from './store/actions/authActions';
import { getSkills } from './store/actions/skillActions';
import PricingScreen from './screens/pricing/pricing_screen';
import QuestionScreen from './screens/question/question_screen';
import CreateQuestion from './screens/question/create_question';
import ViewQuestion from './screens/question/view_question';

import BlogDetail from './screens/blog/detail/blog_detail';
import MyPostsScreen from './screens/blog/my_posts/my_posts_screen';
import EditBlogPost from './screens/blog/edit/edit_blog_post';
import FindMentorsScreen from './screens/findmentors/findmentors';
import MentorProfile from './screens/findmentors/mentor_profile';
import NotificationsScreen from './screens/notifications/notifications_screen';

class FiorApp extends Component {
  componentDidMount() {
    this.props.userMeInitial();
    this.props.getSkills();
  }

  renderFullLoading = () => (
    <div className="row center">
      <div className="full-loading">
        <Image src="assets/svg/loading-full.svg" size="small"/>
      </div>
    </div>
  );

  render() {
    return this.props.initialSignIn ? (
      this.renderFullLoading()
    ) : (
      <BrowserRouter>
        <div
          className="App"
          style={{
            padding: '0 0 300px',
            position: 'relative',
            minHeight: '100vh',
          }}
        >
          <Navbar/>
          <div className="row">
            <Switch>
              <Route exact path="/" component={LandingScreen}/>
              <Route
                exact
                path="/auth/linkedin/callback"
                component={UnauthRequire(LinkedInCallbackScreen)}
              />
              <Route
                exact
                path="/login"
                component={UnauthRequire(AuthScreen)}
              />
              <Route
                exact
                path="/mentorspaces"
                component={AuthRequire(MentorspacesScreen)}
              />
              <Route
                path="/mentorspaces/:mentorspaceId"
                component={AuthRequire(MentorspaceScreen)}
              />
              <Route exact path="/orgs" component={LandingScreen}/>
              <Route exact path="/forum" component={QuestionScreen}/>
              <Route
                exact
                path="/question-forum/create"
                component={CreateQuestion}
              />
              <Route
                exact
                path="/question-forum/:questionId"
                component={ViewQuestion}
              />
              <Route exact path="/blog" component={BlogScreen}/>
              <Route exact path="/blog/edit" component={EditBlogPost}/>
              <Route exact path="/blog/edit/:postId" component={EditBlogPost}/>
              <Route exact path="/blog/:postId" component={BlogDetail}/>
              <Route exact path="/myposts" component={MyPostsScreen}/>
              <Route exact path="/mentors" component={FindMentorsScreen}/>
              <Route exact path="/mentors/:userId" component={MentorProfile}/>
              <Route exact path="/users" component={LandingScreen}/>
              <Route
                exact
                path="/notifications"
                component={NotificationsScreen}
              />
              <Route exact path="/settings" component={LandingScreen}/>
              <Route exact path="/pricing" component={PricingScreen}/>
              <Route exact path="/about" component={LandingScreen}/>
              <Route path="/profile" component={ProfileScreen}/>
              <Route exact path="/dashboard" render={() => (window.location = REACT_APP_ADMIN_URL)}/>
              <Route exact path="*" component={NotFound}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialSignIn: state.auth.initialSignIn,
});

const mapDispatchToProps = (dispatch) => ({
  userMeInitial: () => dispatch(userMeInitial()),
  getSkills: () => dispatch(getSkills()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiorApp);
