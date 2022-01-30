import React from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);

const CoachRoute = ({ currentUser, match, location, component: Component, ...rest }) => {
    let agent = false;
    if (currentUser){
        currentUser.roles.forEach(role => {
            if (role.role.name === 'agent'){
                agent = true;
            }
        });
    }

    return (
        <Route
            {...rest}
            render = {props => {
                if (agent){
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
});
export default withRouter(connect(mapStateToProps)(CoachRoute));