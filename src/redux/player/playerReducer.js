import { PlayerActionTypes } from "./player.types";
import {UserActionTypes} from "../user/user.types";

const INITIAL_STATE = {
    currentPlayer: null,
    isFetching: false, // To check if user is already logged in
    isLoading: false,
    playerError: null
};

const playerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PlayerActionTypes.REGISTER_PLAYER_START:
        case PlayerActionTypes.UPDATE_PLAYER_PRIMARY_PROFILE_START:
            return {
                ...state,
                isLoading: true,
            }
        case PlayerActionTypes.REGISTER_PLAYER_SUCCESS:
        case PlayerActionTypes.UPDATE_PLAYER_PRIMARY_PROFILE_SUCCESS:
            return {
                ...state,
                currentPlayer: action.payload,
                isLoading:  false,
                isFetching: false,
                playerError: null
            }
        case PlayerActionTypes.REGISTER_PLAYER_FAILURE:
        case PlayerActionTypes.UPDATE_PLAYER_PRIMARY_PROFILE_FAILURE:
            return {
                ...state,
                playerError: action.payload,
                isLoading: false,
                isFetching: false
            }

        case PlayerActionTypes.FETCH_PLAYER_PRIMARY_PROFILE_START:
            return {
                ...state,
                isFetching: true,
            }
        case PlayerActionTypes.FETCH_PLAYER_PRIMARY_PROFILE_SUCCESS:
            return {
                ...state,
                currentPlayer: action.payload,
                isFetching: false,
                playerError: null
            }
        case PlayerActionTypes.FETCH_PLAYER_PRIMARY_PROFILE_FAILURE:
            return {
                ...state,
                playerError: action.payload,
                isFetching: false
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentPlayer: null,
            }
        default:
            return state;
    }
};

export default playerReducer;