import React from "react";
import "./menu-items.styling.scss";
const MenuItems = ({ title }) => {
  return (
    <div className="menu-items">
      <div className="content">
        <h1>{title}</h1>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItems;
