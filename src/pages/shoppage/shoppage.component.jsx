import React, { Component } from "react";
import "./shoppage.styling.scss";
import SHOP_DATA from "./shoppage.data";
import CollectionPreview from "../../Components/collectionPreview/collection-preview.component";
class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shoppage">
        <h1>Collections</h1>
        {collection.map(({ id, ...otherCollectionProps }) => {
          return (
            <div>
              <CollectionPreview key={id} {...otherCollectionProps} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
