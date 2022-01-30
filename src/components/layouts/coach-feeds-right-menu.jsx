import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {signOutStart} from "../../redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser, selectCurrentUserLoadingStatus} from "../../redux/user/user.selectors";
import chatlogo from "../../media/chitchaticon.png";
import ButtonSpinner from "../spinners/button-spinner.component";
import notification from "../../media/notificationicon.png";
import System from "../../backend/System";


const CoachFeedsRightMenu = ({ currentUser, isLoading, history, signOutStart }) => {
    const { user } = currentUser;

    const logout = () => {
        signOutStart()
    }

    return (
        <div className="navbaritems2">
            <img
                src={chatlogo}
                alt=""
                style={{
                    height: "25px",
                    width: "25px",
                    marginLeft: "25rem",
                    marginTop: "1.5rem",
                }}
            />
            <a href="">
                <img
                    src={notification}
                    alt=""
                    style={{
                        height: "25px",
                        width: "25px",
                        marginLeft: "2rem",
                        marginTop: "1.5rem",
                        pointer: "cursor",
                    }}
                />
            </a>
            <h4
                style={{
                    marginLeft: "1rem",
                    marginTop: ".8rem",
                    fontSize: "16px",
                    color: "#62737D",
                    fontFamily: "Flutter",
                    paddingTop: "1rem",
                }}
            >
                Trials
            </h4>
            <Link to={'/coach-profile'} >
                <img
                    onClick={() => history.push('/coach-profile')}
                    src={ (currentUser)? System.userImagePath(user.image): ''}
                    alt=""
                    style={{
                        height: "60px",
                        width: "60px",
                        borderRadius: "50%",
                        marginLeft: "2rem",
                        marginTop: ".5rem",
                        cursor: 'pointer',
                        coach: 'pointer'
                    }}
                />
            </Link>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
});
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isLoading: selectCurrentUserLoadingStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachFeedsRightMenu)