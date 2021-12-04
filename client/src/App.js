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

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribeUser = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
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
