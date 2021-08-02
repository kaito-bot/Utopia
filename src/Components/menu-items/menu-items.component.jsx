import React from "react";
import "./menu-items.styling.scss";
const MenuItems = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-items`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1>{title}</h1>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItems;
