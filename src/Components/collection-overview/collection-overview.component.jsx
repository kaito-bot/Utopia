import React from "react";
import "./collection-overview.styling.scss";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";

import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collectionPreview/collection-preview.component";
const CollectionOverview = ({ collection }) => (
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

const mapStateToProps = (state) => ({
  collection: selectCollections(state),
});
export default connect(mapStateToProps)(CollectionOverview);
