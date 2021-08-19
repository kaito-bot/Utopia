import React from "react";
import { Link } from "react-router-dom";
import "./header.styling.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          {" "}
          <Logo />
        </Link>
      </div>
      <div className="navigation">
        <Link className="option" to="/shop">
          {" "}
          SHOP
        </Link>
        <Link className="option" to="/Contact">
          {" "}
          CONTACT
        </Link>
        <Link className="option" to="/signIn">
          {" "}
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Header;
