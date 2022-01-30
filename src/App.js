import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/user/user.actions";


// Stylesheet
import './App.css';
import AppWrapper from "./AppWrapper.component";
import PageSpinner from "./components/spinners/page-spinner.component";
import { selectIsCurrentSettingFetching } from "./redux/setting/setting.selectors";
import {selectCurrentUser, selectCurrentUserFetchingStatus} from "./redux/user/user.selectors";

const AppWrapperWithPageSpinner = PageSpinner(AppWrapper)

const App = ({ checkUserSession, isCurrentUserFetching, isSettingFetching }) => {

    useEffect(async () => {
        await checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <AppWrapperWithPageSpinner isLoading={!!(isCurrentUserFetching || isSettingFetching)} />
        </div>
    );


}

const mapStateToProps = createStructuredSelector({
    isSettingFetching: selectIsCurrentSettingFetching,
    isCurrentUserFetching: selectCurrentUserFetchingStatus
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
