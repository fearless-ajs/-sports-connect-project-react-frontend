import React from "react";
import PlayerProfileComponent from "../../../components/profile/player-profile/player-profile.component";
import {createStructuredSelector} from "reselect";
import { connect } from "react-redux";
import {selectCurrentPlayer} from "../../../redux/player/player.selectors";
import SpinnerComponent from "../../../components/spinners/page-spinner-component/spinner.component";

const PlayerProfilePage = ({ currentPlayer }) => {
    return (
        <div>
            {
                (!currentPlayer)? <SpinnerComponent /> : <PlayerProfileComponent />
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentPlayer: selectCurrentPlayer,
});
export default connect(mapStateToProps)(PlayerProfilePage);