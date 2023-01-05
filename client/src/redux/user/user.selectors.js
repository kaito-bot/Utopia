import { createSelector } from "reselect";

// input selector - accesses the user
const selectUser = (state) => state.user;

// output selector - used in header.component and App.js
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
