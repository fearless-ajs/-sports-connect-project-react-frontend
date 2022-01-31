import React from "react";
import UpdatePlayerProfileComponent from "../../../components/profile/update-player/update-player-profile.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentPlayer} from "../../../redux/player/player.selectors";
import { connect } from "react-redux";
import SpinnerComponent from "../../../components/spinners/page-spinner-component/spinner.component";

const UpdatePlayerProfilePage = ({ currentPlayer }) => {
    return (
        <div>
            {
                (!currentPlayer)?<SpinnerComponent />:<UpdatePlayerProfileComponent />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentPlayer: selectCurrentPlayer
});

export default connect(mapStateToProps)(UpdatePlayerProfilePage);