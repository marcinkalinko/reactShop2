import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  productsData: productsReducer,
  cartProducts: cartReducer
});
