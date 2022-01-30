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
import FeedsPage from "./pages/feeds/feeds.page";
import GuestRoute from "./components/auth/routes/guest-route";
import AuthRoute from "./components/auth/routes/auth-route";
import PlayerRoute from "./components/auth/routes/player-route";

const AppWrapper = ({ currentUser, history }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <GuestRoute exact path="/signup" component={RegisterPage} />
            <GuestRoute exact path="/login" component={LogInPage} />
            <GuestRoute exact path="/verifyAccount/:token" component={VerifyEmailPage} />

            <AuthRoute exact path="/select-account" component={SelectAccountComponent} />
            <AuthRoute exact path="/register-player" component={RegisterPlayerPage} />
            <AuthRoute exact path="/register-coach" component={RegisterCoachPage} />

            {/*<CoachRoute exact path="/coach-profile" component={CoachProfile} />*/}
            {/*<CoachRoute exact path="/update-coach-profile" component={UpdateCoachProfile} />*/}

            <PlayerRoute exact path="/player-profile" component={PlayerProfilePage} />
            {/*<PlayerRoute exact path="/update-player-profile" component={UpdatePlayerProfile} />*/}

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
