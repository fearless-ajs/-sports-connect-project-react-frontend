import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isFetching: false, // To check if user is already logged in
    isLoading: false,
    sessionError: null,
    loginError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.CHECK_USER_SESSION:
            return {
                ...state,
                sessionError: null,
                loginError: null,
                isLoading: false,
                isFetching: true
            }
        case UserActionTypes.VERIFICATION_START:
        case UserActionTypes.SIGN_UP_START:
        case UserActionTypes.UPDATE_PROFILE_START:
            return {
                ...state,
                isLoading: true,
            }
        case UserActionTypes.SIGN_IN_START:
            return {
                ...state,
                sessionError: null,
                loginError: null,
                isLoading: true,
                isFetching: false
            }
        case UserActionTypes.SIGN_IN_SUCCESS:
        case UserActionTypes.VERIFICATION_SUCCESS:
        case UserActionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                sessionError: null,
                loginError: null,
                isLoading:  false,
                isFetching: false
            };
        case UserActionTypes.SIGN_OUT_START:
            return {
                ...state,
                currentUser: null,
                loginError: null,
                isLoading: true,
                isFetching: false
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                sessionError: null,
                loginError: null,
                isLoading: false,
                isFetching: false
            }
        case UserActionTypes.USER_SESSION_FAILURE:
            return {
                ...state,
                sessionError: action.payload,
                loginError: null,
                isLoading: false,
                isFetching: false
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.VERIFICATION_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                sessionError: null,
                loginError: action.payload,
                isLoading: false,
                isFetching: false
            }
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};

export default userReducer;