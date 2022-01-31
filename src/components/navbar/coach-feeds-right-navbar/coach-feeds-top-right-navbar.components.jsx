import React from "react";
import chatlogo from "../../../assets/img/chitchaticon.png";
import notification from "../../../assets/img/notificationicon.png";
import coachimg from "../../../assets/img/coachimg.png";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../../redux/user/user.selectors";
import { connect } from "react-redux";
import history from "../../../history";
import System from "../../../backend/System";


function CoachFeedsTopRightNavBar({ currentUser }) {
  return (
      <div className="navbaritems2">
        <img
          src={chatlogo}
          alt=""
          className="chatlogo"
        />
          <h4>
              Bookings
          </h4>

        <a href="">
          <img
            src={notification}
            alt="notifications"
            className="notif-icon"
          />
        </a>
        <img
          onClick={() => history.push('/coach-profile')}
          src={System.userImagePath(currentUser.user.image)}
          alt="User photo"
          className="profile-photo"
        />
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(CoachFeedsTopRightNavBar);
