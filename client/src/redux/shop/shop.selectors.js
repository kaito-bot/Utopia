import { createSelector } from "reselect";
import memoize from "lodash.memoize";

//input selector
const selectShop = (state) => state.shop;

//returns the collection - output selector
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

//collectionOverview container
export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) => {
    //console.log(collections);
    //console.log(Object.keys(collections));
    return collections
      ? Object.keys(collections).map((key) => collections[key])
      : [];
  }
);

//used in collection component
//memoize - returns a memoized function
export const selectExactCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

//used in collectionOverview container
export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  //to convert it to boolean value
  (shop) => shop.collections
);
