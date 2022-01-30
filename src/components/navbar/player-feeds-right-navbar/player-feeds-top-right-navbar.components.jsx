import React from "react";
import chatlogo from "../../../assets/img/chitchaticon.png";
import notification from "../../../assets/img/notificationicon.png";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../../redux/user/user.selectors";
import { connect } from "react-redux";
import System from "../../../backend/System";
import history from "../../../history";

function PlayerFeedsTopRightNavBar({ currentUser }) {
  return (
      <div className="navbaritems2">
        <img
          src={chatlogo}
          alt=""
          className="chatlogo"
        />
        <h4>
          Interviews
        </h4>

        <a href="">
          <img
            src={notification}
            alt="notifications"
            className="notif-icon"
          />
        </a>
        <img
          onClick={() => history.push('/player-profile')}
          src={System.userImagePath(currentUser.user.image)}
          alt=""
          className="profile-photo"
        />
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(PlayerFeedsTopRightNavBar);
