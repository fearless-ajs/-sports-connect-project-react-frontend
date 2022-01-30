import React from "react";
import logo from "../../../assets/img/logo-dark.png";
import { useState } from "react";
import history from "../../../history";
import "./feeds-top-navbar.styles.css";
import {createStructuredSelector} from "reselect";
import { connect } from "react-redux";
import { selectCurrentPlayer } from "../../../redux/player/player.selectors";
import { selectCurrentCoach } from "../../../redux/coach/coach.selectors";
import PlayerFeedsTopRightNavBar from "../player-feeds-right-navbar/player-feeds-top-right-navbar.components";
import CoachFeedsTopRightNavBar from "../coach-feeds-right-navbar/coach-feeds-top-right-navbar.components";

function FeedsTopNavBar({ currentPlayer, currentCoach }) {
  return (
    <nav className="playernav">
      <div className="navbaritems1">
        <img
          src={logo}
          alt="Logo"
          className="nav-logo"
          onClick={() => history.push('/')}
        />
        <div
          className="form-group has-search"
          style={{
            marginLeft: "2rem",
          }}
        >
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search SportsPadi"
          />
        </div>
      </div>
      {
        (currentPlayer)? <PlayerFeedsTopRightNavBar /> : null
      }
      {
        (currentCoach)? <CoachFeedsTopRightNavBar /> : null
      }
    </nav>
  );
}

const mapStateToProps = createStructuredSelector({
  currentPlayer: selectCurrentPlayer,
  currentCoach: selectCurrentCoach
});
export default connect(mapStateToProps)(FeedsTopNavBar);
