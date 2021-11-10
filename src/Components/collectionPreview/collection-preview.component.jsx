import React from "react";
import ItemsPreview from "../items-preview/items-preview.component";
import "./collection-preview.styling.scss";
import { withRouter } from "react-router";

const CollectionPreview = ({ title, items, history, match }) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => {
          console.log(title);
          history.push(`${match.url}/${title.toLowerCase()}`);
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

export default withRouter(CollectionPreview);
