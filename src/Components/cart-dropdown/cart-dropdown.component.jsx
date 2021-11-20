import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../custom-button/customButton.component";
import "./cart-dropdown.styling.scss";
import { CartItem } from "../cart-item/cart-item.component";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
