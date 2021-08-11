import React from "react";
import "./items-preview.styling.scss";
const ItemsPreview = ({ id, name, imageUrl, price }) => {
  return (
    <div className="items">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    </div>
  );
};

export default ItemsPreview;
