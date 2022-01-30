import { PlayerActionTypes } from "./player.types";


// Takes userCredentials as a whole Object
export const registerPlayerStart = (userCredentials) => ({
   type: PlayerActionTypes.REGISTER_PLAYER_START,
   payload: userCredentials
});

//You can pass a whole object also, it's a personal preference
export const registerPlayerSuccess = user => ({
   type: PlayerActionTypes.REGISTER_PLAYER_SUCCESS,
   payload: user
});

export const registerPlayerFailure = error => ({
   type: PlayerActionTypes.REGISTER_PLAYER_FAILURE,
   payload: error
});


export const fetchPlayerPrimaryProfileStart = () => ({
   type: PlayerActionTypes.FETCH_PLAYER_PRIMARY_PROFILE_START,
});

export const fetchPlayerPrimaryProfileSuccess = playerProfile => ({
   type: PlayerActionTypes.FETCH_PLAYER_PRIMARY_PROFILE_SUCCESS,
   payload: playerProfile
});

export const fetchPlayerPrimaryProfileFailure = error => ({
   type: PlayerActionTypes.FETCH_PLAYER_PRIMARY_PROFILE_FAILURE,
   payload: error
});

export const updatePlayerPrimaryProfileStart = (userCredentials) => ({
   type: PlayerActionTypes.UPDATE_PLAYER_PRIMARY_PROFILE_START,
   payload: userCredentials
});

export const updatePlayerPrimaryProfileSuccess = playerProfile => ({
   type: PlayerActionTypes.UPDATE_PLAYER_PRIMARY_PROFILE_SUCCESS,
   payload: playerProfile
});

export const updatePlayerPrimaryProfileFailure = error => ({
   type: PlayerActionTypes.UPDATE_PLAYER_PRIMARY_PROFILE_FAILURE,
   payload: error
});


export const clearPlayerPrimaryProfileAction = () => ({
   type: PlayerActionTypes.CLEAR_PLAYER_PRIMARY_PROFILE,
})

