import { createSelector } from "reselect";

const selectBooking = state => state.booking;

export const selectCurrentUserBooking = createSelector(
  [selectBooking],
  booking => booking.currentUserBooking
);

export const selectBookingFetchingStatus = createSelector(
    [selectBooking],
    booking => booking.isFetching
);

export const selectBookingLoadingStatus = createSelector(
    [selectBooking],
    booking => booking.isLoading
);
