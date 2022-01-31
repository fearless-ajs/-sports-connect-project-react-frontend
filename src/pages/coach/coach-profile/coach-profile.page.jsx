import React from "react";
import CoachProfileComponent from "../../../components/profile/coach-profile/coach-profile.component";
import {createStructuredSelector} from "reselect";
import { connect } from "react-redux";
import SpinnerComponent from "../../../components/spinners/page-spinner-component/spinner.component";
import {selectCurrentCoach} from "../../../redux/coach/coach.selectors";

const CoachProfilePage = ({ currentCoach }) => {
    return (
        <div>
            {
                (!currentCoach)? <SpinnerComponent /> : <CoachProfileComponent />
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentCoach: selectCurrentCoach,
});
export default connect(mapStateToProps)(CoachProfilePage);