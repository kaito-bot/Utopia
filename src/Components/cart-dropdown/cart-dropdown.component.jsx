import React from "react";
import CustomButton from "../custom-button/customButton.component";
import "./cart-dropdown.styling.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
