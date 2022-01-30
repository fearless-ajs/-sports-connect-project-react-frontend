import { createSelector } from "reselect";

const selectContact = state => state.contact;

export const selectCurrentContact = createSelector(
  [selectContact],
  contact => contact.currentContact
);

export const selectContactLoadingStatus = createSelector(
    [selectContact],
    contact => contact.isLoading
);
