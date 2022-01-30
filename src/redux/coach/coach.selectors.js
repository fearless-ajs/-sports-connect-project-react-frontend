import { createSelector } from "reselect";

const selectCoach = state => state.coach;

export const selectCurrentCoach = createSelector(
  [selectCoach],
  coach => coach.currentCoach
);

export const selectCurrentCoachFetchingStatus = createSelector(
    [selectCoach],
    coach => coach.isFetching
);

export const selectCurrentCoachLoadingStatus = createSelector(
    [selectCoach],
    coach => coach.isLoading
);
