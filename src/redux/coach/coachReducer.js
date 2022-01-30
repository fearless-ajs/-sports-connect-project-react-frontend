import { CoachActionTypes } from "./coach.types";
import { UserActionTypes } from "../user/user.types";

const INITIAL_STATE = {
    currentCoach: null,
    isFetching: false, // To check if user is already logged in
    isLoading: false,
    coachError: null
};

const coachReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CoachActionTypes.REGISTER_COACH_START:
        case CoachActionTypes.UPDATE_COACH_PRIMARY_PROFILE_START:
            return {
                ...state,
                isLoading: true,
            }
        case CoachActionTypes.REGISTER_COACH_SUCCESS:
        case CoachActionTypes.UPDATE_COACH_PRIMARY_PROFILE_SUCCESS:
            return {
                ...state,
                currentCoach: action.payload,
                isLoading:  false,
                isFetching: false,
                coachError: null
            }
        case CoachActionTypes.REGISTER_COACH_FAILURE:
        case CoachActionTypes.UPDATE_COACH_PRIMARY_PROFILE_FAILURE:
            return {
                ...state,
                coachError: action.payload,
                isLoading: false,
                isFetching: false
            }

        case CoachActionTypes.FETCH_COACH_PRIMARY_PROFILE_START:
            return {
                ...state,
                isFetching: true,
            }
        case CoachActionTypes.FETCH_COACH_PRIMARY_PROFILE_SUCCESS:
            return {
                ...state,
                currentCoach: action.payload,
                isFetching: false,
                coachError: null
            }
        case CoachActionTypes.FETCH_COACH_PRIMARY_PROFILE_FAILURE:
            return {
                ...state,
                coachError: action.payload,
                isFetching: false
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentCoach: null,
            }
        default:
            return state;
    }
};

export default coachReducer;