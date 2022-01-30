import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from "./user.types";


import {
    signInSuccess,
    signInFailure,
    signUpSuccess,
    signUpFailure,
    verificationSuccess,
    verificationFailure,
    signOutSuccess,
    signOutFailure,
    userSessionFailure,
    updateProfileSuccess,
    updateProfileFailure
} from "./user.actions";
import Auth from "../../backend/Auth";
import history from "../../history";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);


/** ------------------------------------------------------------------- **/
// Asynchronous logic/ other controllers
// Payload automatically comes in as an object
/** ------------------------------------------------------------------- **/
export function* isUserAuthenticated() {
    try {
        // Check User Authentication status
        const userAuth = yield Auth.isUserLoggedIn();
        yield put(signInSuccess(userAuth.data));
    }catch (error) {
        yield put(userSessionFailure(error.response))
    }
}

export function* signIn({payload: { email, password }}) {
    try{
        const userAuth = yield Auth.authenticateUser(email, password);
        console.log(userAuth.data.user.verificationStatus);
        if (userAuth.data.user.verificationStatus === false){
            notify.fire({
                icon: 'info',
                title: 'Account Inactive',
                text: `Unverified Account, Please verify your account through your email`,
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
            });

            // Set loading to false
            yield put(signInFailure(`Unverified Account, Please verify your account through your email`,))
        }else {
            yield put(signInSuccess(userAuth.data));
            yield history.push('/feeds');
            notify.fire({
                icon: 'success',
                title: 'Logged In Successfully',
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 2000
            });
        }

    }catch(error) {
        const { err, message } = error.response.data;
        notify.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: message,
            showConfirmButton: true,
        });
        yield put(signInFailure(error.response))
    }
}

export function* verifyAccount({ payload: { token } }) {
    try {
        const response = yield Auth.verifyAccount(token);
        yield put(verificationSuccess(response.data));
        yield history.push('/select-account');
        yield Swal.fire({
            icon: 'success',
            title: 'Account Verified',
            text: 'You have been logged in, you will be redirected to create a profile with us',
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 3500
        });
    }catch (error) {
        const { err, message } = error.response.data;
        Swal.fire({
            icon: 'error',
            title: 'Verification error',
            text: `${message}`,
            showConfirmButton: true,
        });
        yield put(verificationFailure(error.response))
    }
}

export function* signUp({payload: { name, email, phone, password, confirmPassword }}) {
    try{
        const user = yield Auth.registerUser(name, email, phone, password, confirmPassword);
        yield put(signUpSuccess(user));
        history.push('/login');
        yield Swal.fire({
            icon: 'success',
            title: 'Account created!',
            text: `A verification message has been sent to your email, Please verify your account through the sent link`,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
        });
    }catch(error) {
        const { err, message } = error.response.data;
        Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: message,
            showConfirmButton: true,
        });
        yield put(signUpFailure(error.response))
    }
}

export function* updateProfile({payload: { formData }}) {
    try{
        const user = yield Auth.updateUser(formData);
        console.log(user);
        yield put(updateProfileSuccess(user.data));
        yield Swal.fire({
            icon: 'success',
            title: 'Profile updated!',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
        });
    }catch(error) {
        const { err, message } = error.response.data;
        Swal.fire({
            icon: 'error',
            title: 'Update Error',
            text: message,
            showConfirmButton: true,
        });
        yield put(updateProfileFailure(error.response))
    }
}

export function* signInAfterSignUp({payload: user }) {
    // console.log(user);

}



export function* signOut() {
   try{
       yield Auth.logout();
       yield put(signOutSuccess());
       yield history.push('/')
       notify.fire({
           icon: 'success',
           title: 'Logged Out Successfully',
           showConfirmButton: false,
           timerProgressBar: true,
           timer: 1000
       });
   }catch (error) {
       yield put(signOutFailure(error))
       notify.fire({
           icon: 'success',
           title: 'Logging out error',
           text: error.response.message,
           showConfirmButton: false,
           timerProgressBar: true,
           timer: 1000
       });
   }
}

/** ------------------------------------------------------------------- **/
// LISTENERS
/** ------------------------------------------------------------------- **/
export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* onVerificationStart() {
    yield takeLatest(UserActionTypes.VERIFICATION_START, verifyAccount)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onUpdateProfileStart() {
    yield takeLatest(UserActionTypes.UPDATE_PROFILE_START, updateProfile)
}

export function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onSignInStart),
        call(onSignOut),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onVerificationStart),
        call(onUpdateProfileStart)
    ])
}