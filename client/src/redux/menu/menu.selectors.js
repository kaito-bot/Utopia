import { createSelector } from "reselect";

// input selector - accesses the menu slice from root
const selectMenu = (state) => state.menu;

//output selector - accesses the initial state of menu reducer i.e. menuItemName
export const selectMenuSections = createSelector(
  [selectMenu],
  (menu) => menu.menuItemName
);
