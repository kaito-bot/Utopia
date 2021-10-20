import React from "react";
import "./checkout.styling.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>z
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
      // console.log("hey")
    ))}
    <div className="total">
      <span>TOTAL : {total} </span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);