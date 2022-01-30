import React from "react";
import soccerkick from "../../../assets/img/soccerkick2.png";
import coach from "../../../assets/img/coach.png";
import history from "../../../history";
import './registeras.styles.css'

function SelectAccountComponent() {
  return (
    <>
      <div className="playerorcoach">
        <div>
          <h3
            style={{
              paddingTop: "2rem",
              fontFamily: "Fluterwave",
            }}
          >
            Register as
          </h3>
        </div>
        <div className="vl">
          <span className="vl-innertext">OR</span>
        </div>
        <div className="container2">
          <div className="box">
            <img src={soccerkick} alt="Player Image" className="player-img" />
            <button
              className="btn2"
              onClick={() => history.push('/register-player')}
            >
              Player
            </button>
          </div>

          <div className="box">
            <img src={coach} alt="Coach Image" className="coach-img" />
            <button
              className="btn2"
              onClick={() => history.push('/register-coach')}
            >
              Agent
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectAccountComponent;
