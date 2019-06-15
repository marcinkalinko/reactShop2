import { ACTION_TYPES } from "../actions";

const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return [...state, action.product];
    case ACTION_TYPES.REMOVE_FROM_CART:
      return state.filter(item => item.name !== action.product.name);
    default:
      return state;
  }
};
export default cartReducer;
