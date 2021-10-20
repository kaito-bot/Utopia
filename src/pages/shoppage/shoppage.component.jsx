import React from "react";
import "./shoppage.styling.scss";
import CollectionPreview from "../../Components/collectionPreview/collection-preview.component";

import { connect } from "react-redux";

import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collection }) => (
  <div className="shoppage">
    <h1>Collections</h1>
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
export default connect(mapStateToProps)(ShopPage);
