import { createSelector } from "reselect";

//cart selector - input selector
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
//cartItemCount selector - output selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

//hidden selector - output selector
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
