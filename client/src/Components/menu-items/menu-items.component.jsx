import React from "react";

import { useHistory, useLocation } from "react-router-dom";
import "./menu-items.styling.scss";
const MenuItems = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div
      className={`${size} menu-items`}
      onClick={() => {
        /*this pushes a new entry onto the history stack */
        history.push(`${location.pathname}${linkUrl}`);
        //console.log(history.push(`${location.pathname}${linkUrl}`));
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

export default MenuItems;
