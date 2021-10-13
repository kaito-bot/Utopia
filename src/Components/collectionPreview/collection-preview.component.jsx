import React from "react";
import ItemsPreview from "../items-preview/items-preview.component";
import "./collection-preview.styling.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => {
            return index < 4;
          })
          .map((item) => {
            return <ItemsPreview key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
