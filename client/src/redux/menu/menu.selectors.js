import { createSelector } from "reselect";

// input selector
const selectMenu = (state) => state.menu;

//output selector
export const selectMenuSections = createSelector(
  [selectMenu],
  (menu) => menu.menuItemName
);
