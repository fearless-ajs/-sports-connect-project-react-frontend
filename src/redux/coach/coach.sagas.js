import { takeLatest, put, all, call } from 'redux-saga/effects';
import { CoachActionTypes } from "./coach.types";
import { UserActionTypes } from "../user/user.types";

import {
    registerCoachSuccess,
    registerCoachFailure,
    updateCoachPrimaryProfileSuccess,
    updateCoachPrimaryProfileFailure,
    fetchCoachPrimaryProfileSuccess,
    fetchCoachPrimaryProfileFailure,
} from "./coach.actions";

import Coach from "../../backend/Coach";
import history from "../../history";
import RoleBasedAccessControl from "../../utils/RoleBasedAccessControl";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);


/** ------------------------------------------------------------------- **/
// Asynchronous logic/ other controllers
// Payload automatically comes in as an object
/** ------------------------------------------------------------------- **/
export function* registerNewCoach({payload: { dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink  }}) {
    try{
        const coach = yield Coach.registerNewCoach(dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink);
        yield put(registerCoachSuccess(coach));
        history.push('/feeds');
        notify.fire({
            icon: 'success',
            title: 'Coach account created!',
            text: `A coach account has been created for you, you can only have one account attached to your email `,
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
        yield put(registerCoachFailure(error.response))
    }
}

export function* fetchCoachPrimaryProfile({payload: user }) {
    // Check if the user has an agent account
    if (RoleBasedAccessControl.isCoach(user)){
      try {
          const response =  yield Coach.fetchCoachPrimaryProfile();
          yield put(fetchCoachPrimaryProfileSuccess(response.data.data))
      }catch (error) {
          yield put(fetchCoachPrimaryProfileFailure(error));
          notify.fire({
              icon: 'error',
              title: 'Profile error',
              text: "We are currently unable to fetch your coach profile",
              showConfirmButton: true,
          });
      }

    }
}

export function* updateCoachPrimaryProfile({payload: { dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink  }}) {
    try{
        const coach = yield Coach.updateCoachPrimaryProfile(dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink);
        yield put(updateCoachPrimaryProfileSuccess(coach.data.data));
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
        yield put(updateCoachPrimaryProfileFailure(error.response))
    }
}



/** ------------------------------------------------------------------- **/
// LISTENERS
/** ------------------------------------------------------------------- **/

export function* onRegisterCoachStart() {
    yield takeLatest(CoachActionTypes.REGISTER_COACH_START, registerNewCoach)
}

export function* onUpdateCoachPrimaryProfileStart() {
    yield takeLatest(CoachActionTypes.UPDATE_COACH_PRIMARY_PROFILE_START, updateCoachPrimaryProfile)
}

export function* onSignInSuccess() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchCoachPrimaryProfile)
}

export function* coachSagas() {
    yield all([
        call(onRegisterCoachStart),
        call(onSignInSuccess),
        call(onUpdateCoachPrimaryProfileStart)
    ])
}