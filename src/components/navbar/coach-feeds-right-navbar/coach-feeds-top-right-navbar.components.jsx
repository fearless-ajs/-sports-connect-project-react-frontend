import React from "react";
import chatlogo from "../../../assets/img/chitchaticon.png";
import notification from "../../../assets/img/notificationicon.png";
import coachimg from "../../../assets/img/coachimg.png";

function CoachFeedsTopRightNavBar() {
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
          src={coachimg}
          alt=""
          className="profile-photo"
        />
      </div>
  );
}

export default CoachFeedsTopRightNavBar;
