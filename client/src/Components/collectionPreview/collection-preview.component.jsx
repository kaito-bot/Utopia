import React from "react";
import ItemsPreview from "../items-preview/items-preview.component";
import "./collection-preview.styling.scss";
import { useHistory, useLocation } from "react-router";

const CollectionPreview = ({ title, items }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => {
          console.log(title);
          history.push(`${location.pathname}/${title.toLowerCase()}`);
        }}
      >
        {title}
      </h1>
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
