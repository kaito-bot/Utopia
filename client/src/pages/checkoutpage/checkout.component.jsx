import React from "react";
import "./checkout.styling.scss";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

import StripeCheckoutButton from "../../Components/stripe-button/stripe-button.component";
const CheckoutPage = () => {
  //gives the cartItems (array of objects)
  const cartItems = useSelector(selectCartItems);

  //gives the total
  const total = useSelector(selectCartTotal);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
          {/*console.log(cartItems)*/}
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL : ₹{total} </span>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;
