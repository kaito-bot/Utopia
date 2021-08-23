import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignUpAndSignInPage from "./pages/sigup-and-signin-page/sigup-and-signin-page.component";
import Header from "./Components/header/header.component";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeUser = null;

  componentDidMount() {
    this.unsubscribeUser = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeUser();
  }

  render() {
    return (
      <div>
        
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignUpAndSignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
