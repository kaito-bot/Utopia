import React from "react";
import "./collection.styling.scss";
import ItemsPreview from "../../Components/items-preview/items-preview.component";
import { connect } from "react-redux";
import { selectExactCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  console.log(collection);
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectExactCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
