import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { fetchCollectionsStart } from "./shop/shop.sagas";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchCollectionsStart);
const persistor = persistStore(store);

export { store, persistor };
