import React from "react";
import { Route } from "react-router-dom";
import "./shoppage.styling.scss";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../Components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collectionpage/collection.container";

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shoppage">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        {/* {console.log(`${match.path}/:collectionId`)} */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
