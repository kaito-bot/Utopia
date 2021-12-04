const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const cors = require("cors");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// const stripe = require("stripe")(
//   "sk_test_51JnGmXSJbXLGu5DTfOZyodIaoC71LNb2V0XOW67feiqf3t9W89OBDCiBUtMGW6dJapMARsrRII25YUstJzbAIjfC002qB6GzHG"
// );
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
