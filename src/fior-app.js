import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
import PricingScreen from './screens/pricing/pricing_screen';
import QuestionScreen from './screens/question/question_screen';
import CreateQuestion from './screens/question/create_question';
import BlogDetail from './screens/blog/detail/blog_detail';
import MyPostsScreen from './screens/blog/my_posts/my_posts_screen';
import EditBlogPost from './screens/blog/edit/edit_blog_post';

class FiorApp extends Component {
  componentDidMount() {
    this.props.userMeInitial();
  }

  renderFullLoading = () => (
    <div className="row center">
      <div className="full-loading">
        <Image src="assets/svg/loading-full.svg" size="small" />
      </div>
    </div>
  );

  render() {
    return this.props.initialSignIn ? (
      this.renderFullLoading()
    ) : (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="row">
            <Switch>
              <Route exact path="/" component={LandingScreen} />
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
                exact
                path="/mentorspaces/:mentorspaceId"
                component={AuthRequire(MentorspaceScreen)}
              />
              <Route exact path="/orgs" component={LandingScreen} />
              <Route exact path="/forum" component={QuestionScreen} />
              <Route
                exact
                path="/forum/create"
                component={CreateQuestion}
              />
              <Route exact path="/blog" component={BlogScreen} />
              <Route exact path="/blog/edit" component={EditBlogPost} />
              <Route exact path="/blog/edit/:postId" component={EditBlogPost} />
              <Route exact path="/blog/:postId" component={BlogDetail} />
              <Route exact path="/myposts" component={MyPostsScreen} />
              <Route exact path="/users" component={LandingScreen} />
              <Route exact path="/notifications" component={LandingScreen} />
              <Route exact path="/settings" component={LandingScreen} />
              <Route exact path="/pricing" component={PricingScreen} />
              <Route exact path="/about" component={LandingScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(FiorApp);
