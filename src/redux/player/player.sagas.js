import { takeLatest, put, all, call } from 'redux-saga/effects';
import { PlayerActionTypes } from "./player.types";


import {
    registerPlayerSuccess,
    registerPlayerFailure,
    fetchPlayerPrimaryProfileSuccess,
    fetchPlayerPrimaryProfileFailure,
    updatePlayerPrimaryProfileSuccess,
    updatePlayerPrimaryProfileFailure
} from "./player.actions";
import Player from "../../backend/Player";
import history from "../../history";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import RoleBasedAccessControl from "../../utils/RoleBasedAccessControl";
import {UserActionTypes} from "../user/user.types";
const notify = withReactContent(Swal);


/** ------------------------------------------------------------------- **/
// Asynchronous logic/ other controllers
// Payload automatically comes in as an object
/** ------------------------------------------------------------------- **/
export function* registerNewPlayer({payload: { favoriteWingNo, dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink  }}) {
    try{
        const player = yield Player.registerNewPlayer(favoriteWingNo, dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink);
        yield put(registerPlayerSuccess(player));
        notify.fire({
            icon: 'success',
            title: 'Player account created!',
            text: `A player account has been created for you, you can only have one account attached to your email `,
            showCancelButton: false,
            confirmButtonColor: '#00a01e',
            confirmButtonText: 'Ok',
        });
        history.push('/feeds');
    }catch(error) {
        const {  message } = error.response.data;
        notify.fire({
            icon: 'error',
            title: 'Registration failure',
            text: message,
            showConfirmButton: true,
            confirmButtonColor: '#00a01e',
        });
        yield put(registerPlayerFailure(error.response))
    }
}

export function* fetchPlayerPrimaryProfile({payload: user }) {
    // Check if the user has an agent account
    if (RoleBasedAccessControl.isPlayer(user)){
        try {
            const response =  yield Player.fetchPlayerPrimaryProfile();
            yield put(fetchPlayerPrimaryProfileSuccess(response.data.data))
        }catch (error) {
            yield put(fetchPlayerPrimaryProfileFailure(error.response.data));
            notify.fire({
                icon: 'error',
                title: 'Profile error',
                text: error.response.data.message,
                showConfirmButton: true,
            });
        }

    }
}

export function* updatePlayerPrimaryProfile({payload: { favoriteWingNo, dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink }}) {
    try{
        const coach = yield Player.updatePlayerPrimaryProfile(favoriteWingNo, dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink);
        yield put(updatePlayerPrimaryProfileSuccess(coach.data.data));
        notify.fire({
            icon: 'success',
            title: 'Profile updated!',
            showCancelButton: false,
            confirmButtonColor: '#00a01e',
            confirmButtonText: 'Ok',
        });
    }catch(error) {
        const {  message } = error.response.data;
        notify.fire({
            icon: 'error',
            title: 'Registration failure',
            text: message,
            showConfirmButton: true,
            confirmButtonColor: '#00a01e',
        });
        yield put(updatePlayerPrimaryProfileFailure(error.response))
    }
}


/** ------------------------------------------------------------------- **/
// LISTENERS
/** ------------------------------------------------------------------- **/


export function* onRegisterUserStart() {
    yield takeLatest(PlayerActionTypes.REGISTER_PLAYER_START, registerNewPlayer)
}

export function* onUpdateCoachPrimaryProfileStart() {
    yield takeLatest(PlayerActionTypes.UPDATE_PLAYER_PRIMARY_PROFILE_START, updatePlayerPrimaryProfile)
}


export function* onSignInSuccess() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchPlayerPrimaryProfile)
}

export function* playerSagas() {
    yield all([
        call(onRegisterUserStart),
        call(onSignInSuccess),
        call(onUpdateCoachPrimaryProfileStart)
    ])
}