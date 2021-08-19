import React from "react";
//import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./menu-items.styling.scss";
const MenuItems = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`${size} menu-items`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItems);
