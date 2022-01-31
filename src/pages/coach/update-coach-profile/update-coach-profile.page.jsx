import React from "react";
import UpdateCoachProfileComponent from "../../../components/profile/update-coach/update-coach-profile.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentPlayer} from "../../../redux/player/player.selectors";
import { connect } from "react-redux";
import SpinnerComponent from "../../../components/spinners/page-spinner-component/spinner.component";
import {selectCurrentCoach} from "../../../redux/coach/coach.selectors";

const UpdateCoachProfilePage = ({ currentCoach }) => {
    return (
        <div>
            {
                (!currentCoach)?<SpinnerComponent />:<UpdateCoachProfileComponent />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentCoach: selectCurrentCoach
});

export default connect(mapStateToProps)(UpdateCoachProfilePage);