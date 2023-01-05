import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JnGmXSJbXLGu5DTlexc2aHDDEuDYlFzB2OmTOHuv3EJ85kyU20o9ltGULB0Zc4lrQ8iiL9QEcJI1EETlBELibqj00NW9BtPQs";
  const onToken = (token) => {
    // makes a post request to the payment endpoint
    axios({
      url: "payment",
      method: "post",
      data: { amount: priceForStripe, token: token },
    })
      .then((response) => {
        alert("Payment successful");
        console.log("yolo");
      })
      .catch((error) => {
        console.log("payment error", error.response);
        alert(
          "there was an issue with your payment. Please make sure you use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Utopia Ltd."
      billingAddress
      shippingAddress
      amount={priceForStripe}
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ₹${price}`}
      currency="INR"
      panelLabel="pay"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
