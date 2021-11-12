import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.component";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
