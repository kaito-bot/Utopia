import "./App.css";
import React, { useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignUpAndSignInPage from "./pages/sigup-and-signin-page/sigup-and-signin-page.component";
import CheckoutPage from "./pages/checkoutpage/checkout.component";

import Header from "./Components/header/header.component";

import { Route, Switch, Redirect } from "react-router-dom";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";

import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeUser = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => unsubscribeUser;
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signIn"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <SignUpAndSignInPage />;
          }}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
