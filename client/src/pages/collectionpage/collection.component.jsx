import React from "react";
import "./collection.styling.scss";
import ItemsPreview from "../../Components/items-preview/items-preview.component";
import { useSelector } from "react-redux";
import { selectExactCollection } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectExactCollection(collectionId));
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <ItemsPreview key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
