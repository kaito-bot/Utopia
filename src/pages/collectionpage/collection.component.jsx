import React from "react";
import "./collection.styling.scss";
import ItemsPreview from "../../Components/items-preview/items-preview.component";
import { connect } from "react-redux";
import { selectExactCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  //console.log("match", match.params.collectionId);
  //console.log(collection);
  return (
    <div className="collection">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectExactCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
