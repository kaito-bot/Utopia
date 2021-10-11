import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignUpAndSignInPage from "./pages/sigup-and-signin-page/sigup-and-signin-page.component";
import Header from "./Components/header/header.component";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeUser = null;

  componentDidMount() {
    this.unsubscribeUser = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          //console.log(this.state);
        });
      } else {
        this.props.setCurrentUser({ userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeUser();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignUpAndSignInPage} />
        </Switch>
      </div>
    );
  }
}
const mapDispatcherToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatcherToProps)(App);
