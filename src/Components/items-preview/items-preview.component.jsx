import React from "react";
import "./items-preview.styling.scss";
import CustomButton from "../custom-button/customButton.component";
const ItemsPreview = ({ id, name, imageUrl, price }) => {
  return (
    <div className="items">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CustomButton inverted>Add to cart</CustomButton>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ItemsPreview;
