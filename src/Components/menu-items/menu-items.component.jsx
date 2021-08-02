import React from "react";
import "./menu-items.styling.scss";
const MenuItems = ({ title, imageUrl,size }) => {
  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${size} menu-items`}>
      <div className="content">
        <h1>{title}</h1>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItems;
