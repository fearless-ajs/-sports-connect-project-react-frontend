import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
   type: UserActionTypes.SET_CURRENT_USER,
   payload: user
});

// Takes userCredentials as a whole Object
export const signUpStart = (userCredentials) => ({
   type: UserActionTypes.SIGN_UP_START,
   payload: userCredentials
});

//You can pass a whole object also, it's a personal preference
export const signUpSuccess = user => ({
   type: UserActionTypes.SIGN_UP_SUCCESS,
   payload: user
});

export const signUpFailure = error => ({
   type: UserActionTypes.SIGN_UP_FAILURE,
   payload: error
});

export const signInStart = emailAndPassword => ({
   type: UserActionTypes.SIGN_IN_START,
   payload: emailAndPassword
});

export const signInSuccess = user => ({
   type: UserActionTypes.SIGN_IN_SUCCESS,
   payload: user
});

export const signInFailure = error => ({
   type: UserActionTypes.SIGN_IN_FAILURE,
   payload: error
});


export const userSessionFailure = error => ({
   type: UserActionTypes.USER_SESSION_FAILURE,
   payload: error
});

export const verificationStart = token => ({
   type: UserActionTypes.VERIFICATION_START,
   payload: token
});

export const verificationSuccess = user => ({
   type: UserActionTypes.VERIFICATION_SUCCESS,
   payload: user
});

export const verificationFailure = error => ({
   type: UserActionTypes.VERIFICATION_FAILURE,
   payload: error
});

export const checkUserSession = () => ({
   type: UserActionTypes.CHECK_USER_SESSION
});

export const updateProfileStart = formData => ({
   type: UserActionTypes.UPDATE_PROFILE_START,
   payload: formData
});

//You can pass a whole object also, it's a personal preference
export const updateProfileSuccess = user => ({
   type: UserActionTypes.UPDATE_PROFILE_SUCCESS,
   payload: user
});

export const updateProfileFailure = error => ({
   type: UserActionTypes.UPDATE_PROFILE_FAILURE,
   payload: error
});

export const signOutStart = () => ({
   type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
   type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
   type: UserActionTypes.SIGN_OUT_FAILURE,
   payload: error
});

