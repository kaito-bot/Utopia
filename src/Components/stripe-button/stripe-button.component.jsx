import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JnGmXSJbXLGu5DTlexc2aHDDEuDYlFzB2OmTOHuv3EJ85kyU20o9ltGULB0Zc4lrQ8iiL9QEcJI1EETlBELibqj00NW9BtPQs";
  const onToken = (token) => {
    console.log(token);
    alert("PAYMENT SUCCESSFUL");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Utopia Ltd."
      billingAddress
      shippingAddress
      amount={priceForStripe}
      image="https://p.kindpng.com/picc/s/233-2335795_anime-chibi-with-transparent-background-png-download-transparent.png"
      description={`Your total is $${price}`}
      panelLabel="pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
