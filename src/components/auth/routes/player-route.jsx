import React from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import RoleBasedAccessControl from "../../../utils/RoleBasedAccessControl";
import {setLastAttemptedRoute} from "../../../redux/routing/routing.actions";
import {selectLastAttemptedRoute} from "../../../redux/routing/routing.selectors";
const notify = withReactContent(Swal);

const PlayerRoute = ({ currentUser, lastAttemptedRoute, setLastAttemptedRoute, location,  component: Component, ...rest }) => {
    //Set the attempted route, i.e the route the user is trying to access
    if (location.pathname !== '/login' && location.pathname !== '/login#'){
        setLastAttemptedRoute(location.pathname);
    }

    let player = false;
    if (currentUser){
        currentUser.roles.forEach(role => {
            if (role.role.name === 'player'){
                player = true;
            }
        });
    }

    return (
        <Route
            {...rest}
            render = {props => {
                if (player){
                    return <Component { ...props } />;
                }else {
                    return <Redirect to='/login' />;
                }
            }}
        />
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    lastAttemptedRoute: selectLastAttemptedRoute
});

const mapDispatchToProps = dispatch => ({
    setLastAttemptedRoute: route => dispatch(setLastAttemptedRoute(route))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerRoute));