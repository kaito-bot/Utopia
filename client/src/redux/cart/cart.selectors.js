import { createSelector } from "reselect";

//cart selector - input selector
const selectCart = (state) => state.cart;

// cartItems selector - output selector
// used in checkout component, returns the cartItems array
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
//cartItemCount selector - output selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    //calculate the overall quantity of items
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

//cartTotal selector - output selector

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
