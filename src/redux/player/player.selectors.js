import { createSelector } from "reselect";

const selectPlayer = state => state.player;

export const selectCurrentPlayer = createSelector(
  [selectPlayer],
  player => player.currentPlayer
);

export const selectCurrentPlayerFetchingStatus = createSelector(
    [selectPlayer],
    player => player.isFetching
);

export const selectCurrentPlayerLoadingStatus = createSelector(
    [selectPlayer],
    player => player.isLoading
);
