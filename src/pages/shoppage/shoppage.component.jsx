import React from "react";
import { Route } from "react-router-dom";
import "./shoppage.styling.scss";
import CollectionPage from "../collectionpage/collection.component";
import CollectionOverview from "../../Components/collection-overview/collection-overview.component";
const ShopPage = ({ match }) => {
  //console.log(match);
  return (
    <div className="shoppage">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
      {/* {console.log(`${match.path}/:collectionId`)} */}
    </div>
  );
};

export default ShopPage;
