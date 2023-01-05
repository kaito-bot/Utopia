import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";

import { compose } from "redux";

//returns an object with same key but with the selector replaced with its value.
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

//composes the argument functions - returns a composite function
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  // a higher order component that will take CollectionOverview component as a wrappercomponent
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
