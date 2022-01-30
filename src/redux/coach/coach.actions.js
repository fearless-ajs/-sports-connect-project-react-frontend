import { CoachActionTypes } from "./coach.types";


// Takes userCredentials as a whole Object
export const registerCoachStart = (userCredentials) => ({
   type: CoachActionTypes.REGISTER_COACH_START,
   payload: userCredentials
});

//You can pass a whole object also, it's a personal preference
export const registerCoachSuccess = user => ({
   type: CoachActionTypes.REGISTER_COACH_SUCCESS,
   payload: user
});

export const registerCoachFailure = error => ({
   type: CoachActionTypes.REGISTER_COACH_FAILURE,
   payload: error
});


export const fetchCoachPrimaryProfileStart = () => ({
   type: CoachActionTypes.FETCH_COACH_PRIMARY_PROFILE_START,
});

export const fetchCoachPrimaryProfileSuccess = coachProfile => ({
   type: CoachActionTypes.FETCH_COACH_PRIMARY_PROFILE_SUCCESS,
   payload: coachProfile
});

export const fetchCoachPrimaryProfileFailure = error => ({
   type: CoachActionTypes.FETCH_COACH_PRIMARY_PROFILE_FAILURE,
   payload: error
});

export const updateCoachPrimaryProfileStart = (userCredentials) => ({
   type: CoachActionTypes.UPDATE_COACH_PRIMARY_PROFILE_START,
   payload: userCredentials
});

export const updateCoachPrimaryProfileSuccess = coachProfile => ({
   type: CoachActionTypes.UPDATE_COACH_PRIMARY_PROFILE_SUCCESS,
   payload: coachProfile
});

export const updateCoachPrimaryProfileFailure = error => ({
   type: CoachActionTypes.UPDATE_COACH_PRIMARY_PROFILE_FAILURE,
   payload: error
});

export const clearCoachPrimaryProfileAction = () => ({
   type: CoachActionTypes.CLEAR_COACH_PRIMARY_PROFILE,
})


