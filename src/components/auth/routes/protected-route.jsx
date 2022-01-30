import React from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);

const ProtectedRoute = ({ currentUser, match, location, component: Component, ...rest }) => {
    let newUser = false;
    let player = false;
    let agent = false;
    if (currentUser){
        currentUser.roles.forEach(role => {
            if (role.role.name === 'new-user'){
                newUser = true;
            }
            // User is a player
            if (role.role.name === 'player'){
                player = true;
            }
            // User is a agent
            if (role.role.name === 'agent'){
                agent = true;
            }
        });
    }

    return (
        <Route
            {...rest}
            render = {props => {
                if (currentUser){

                    // Check if the user has a registered profile
                    if (newUser === true){
                        if (location.pathname !== '/select-account'){
                            if (location.pathname === '/register-player'){
                                return <Component { ...props } />;
                            }
                            if (location.pathname === '/register-coach'){
                                return <Component { ...props } />;
                            }
                            return <Redirect to='/select-account' />;
                        }
                    }
                    if (player === true || agent === true){
                        if (location.pathname === '/select-account' ){
                            return <Redirect to='/feeds' />;
                        }
                    }
                    return <Component { ...props } />;
                }else {
                    notify.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'Unauthorized',
                        text: 'Please login to your account to get access the page',
                        showConfirmButton: true,
                        timerProgressBar: true,
                        confirmButtonColor: '#00a01e',
                        timer: 3000
                    });
                    return <Redirect to='/login' />;
                }
             }}
        />
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
export default withRouter(connect(mapStateToProps)(ProtectedRoute));