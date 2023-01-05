import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { fetchCollectionsStart } from "./shop/shop.sagas";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";

//connects the Saga to the Redux Store
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//creates a redux store
const store = createStore(rootReducer, applyMiddleware(...middlewares));
//runs when fetchcollectionstart action is dispatched from shoppage
sagaMiddleware.run(fetchCollectionsStart);

//to persist the store even if window is closed
const persistor = persistStore(store);

export { store, persistor };
