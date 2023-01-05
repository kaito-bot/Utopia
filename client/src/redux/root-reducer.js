import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import menuReducer from "./menu/menu.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  //saves redux store in local storage
  storage,
  //cart will be persisted
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
  shop: shopReducer,
});
//creates persisted reducer
export default persistReducer(persistConfig, rootReducer);
