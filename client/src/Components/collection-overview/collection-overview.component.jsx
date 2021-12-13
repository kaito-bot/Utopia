import React from "react";
import "./collection-overview.styling.scss";
import { useSelector } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collectionPreview/collection-preview.component";

const CollectionOverview = () => {
  const collection = useSelector(selectCollectionForPreview);

  return (
    <div className="collections-overview">
      {collection.map(({ id, ...otherCollectionProps }) => {
        return (
          <div key={id}>
            <CollectionPreview key={id} {...otherCollectionProps} />
          </div>
        );
      })}
    </div>
  );
};

export default CollectionOverview;
