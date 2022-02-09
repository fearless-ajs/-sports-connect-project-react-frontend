import React from 'react';
import {  Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";


import { setCurrentSetting } from "./redux/setting/setting.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

// React Components
import Homepage from "./pages/homepage/homepage.component";
import LogInPage from "./pages/login/login.page";
import RegisterPage from "./pages/regitser/register.page";
import VerifyEmailPage from "./pages/verifyEmail/verify-email.page";
import SelectAccountComponent from "./components/auth/register/registeras.component";
import RegisterPlayerPage from "./pages/register-player/register-player.page";
import RegisterCoachPage from "./pages/register-coach/register-coach.page";
import PlayerProfilePage from "./pages/player/player-profile/player-profile.page";
import UpdatePlayerProfilePage from "./pages/player/update-player-profile/update-player-profile.page";
import CoachProfilePage from "./pages/coach/coach-profile/coach-profile.page";
import UpdateCoachProfilePage from "./pages/coach/update-coach-profile/update-coach-profile.page";
import FeedsPage from "./pages/feeds/feeds.page";
import InterviewRequestsPage from "./pages/talent/interview-requests.page";

import ResetPasswordPage from "./pages/reset-password/reset-password.page";
import ChoosePasswordPage from "./pages/reset-password/choose-password.page";
import GuestRoute from "./components/auth/routes/guest-route";
import AuthRoute from "./components/auth/routes/auth-route";
import PlayerRoute from "./components/auth/routes/player-route";
import CoachRoute from "./components/auth/routes/coach-route";


const AppWrapper = ({ currentUser, history }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <GuestRoute exact path="/signup" component={RegisterPage} />
            <GuestRoute exact path="/login" component={LogInPage} />
            <GuestRoute exact path="/verifyAccount/:token" component={VerifyEmailPage} />
            <GuestRoute exact path="/reset-password" component={ResetPasswordPage} />
            <GuestRoute exact path="/choose-password/:resetToken" component={ChoosePasswordPage} />

            <AuthRoute exact path="/select-account" component={SelectAccountComponent} />
            <AuthRoute exact path="/register-player" component={RegisterPlayerPage} />
            <AuthRoute exact path="/register-coach" component={RegisterCoachPage} />

            <CoachRoute exact path="/coach-profile" component={CoachProfilePage} />
            <CoachRoute exact path="/update-coach-profile" component={UpdateCoachProfilePage} />

            <PlayerRoute exact path="/player-profile" component={PlayerProfilePage} />
            <PlayerRoute exact path="/update-player-profile" component={UpdatePlayerProfilePage} />
            <CoachRoute exact path="/requests" component={InterviewRequestsPage} />

            <AuthRoute exact path="/feeds" component={FeedsPage} />

            {/*<Route path="*" component={Error} />*/}
        </Switch>
    );

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentSetting: setting => dispatch(setCurrentSetting(setting)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppWrapper));
