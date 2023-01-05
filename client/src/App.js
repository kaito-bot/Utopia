import "./App.css";
import React, { useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignUpAndSignInPage from "./pages/sigup-and-signin-page/sigup-and-signin-page.component";
import CheckoutPage from "./pages/checkoutpage/checkout.component";

import Header from "./Components/header/header.component";

import { Route, Switch, Redirect } from "react-router-dom";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";

import { useSelector, useDispatch } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import SignIn from "./Components/sign-in/sign-in.component";
import SignUp from "./Components/sign-up/sign-up.component";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    //unsubsribeUser has value firebase.unsubscribe returned by onAuthStateChanged
    const unsubscribeUser = auth.onAuthStateChanged(async (userAuth) => {
      //checks if userAuth has some value or is it null
      if (userAuth) {
        //returns userRef
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });
    return () => unsubscribeUser;
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        {/* for mobile view */}
        <Route
          exact
          path="/signinresp"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <SignIn />;
          }}
        />
        <Route
          exact
          path="/signupresp"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <SignUp />;
          }}
        />

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

export default App;
