import React from "react";
import { Link } from "react-router-dom";
import "./header.styling.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="navigation">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/Contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStatetoProps)(Header);
