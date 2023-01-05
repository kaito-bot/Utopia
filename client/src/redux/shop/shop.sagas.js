import { takeLatest, call, put } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {
  convertCollectionSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

//saga
export function* fetchCollectionAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();
    // calls convertCollectionSnapshotToMap(snapshot)
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    // dispatches fetchCollectionsSuccess action to the reducer
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    // dispatches fetchCollectionsFailure action to the reducer
    put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
