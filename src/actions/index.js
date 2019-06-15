import { API_URL } from "../constants";

export const ACTION_TYPES = {
  PRODUCTS_FETCH: "PRODUCTS_FETCH",
  PRODUCTS_FETCH_SUCCESS: "PRODUCTS_FETCH_SUCCESS",
  PRODUCTS_FETCH_ERROR: "PRODUCTS_FETCH_ERROR",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART"
};

export const fetchProducts = () => ({
  type: ACTION_TYPES.PRODUCTS_FETCH
});

export const fetchProductsSuccess = products => ({
  type: ACTION_TYPES.PRODUCTS_FETCH_SUCCESS,
  products
});

export const fetchProductsError = () => ({
  type: ACTION_TYPES.PRODUCTS_FETCH_ERROR
});

export const getProducts = () => {
  return async dispatch => {
    try {
      dispatch(fetchProducts());
      const response = await fetch(API_URL);
      const products = await response.json();

      dispatch(fetchProductsSuccess(products));
    } catch (e) {
      dispatch(fetchProductsError());
    }
  };
};

export const addToCart = product => dispatch =>
  dispatch({
    type: ACTION_TYPES.ADD_TO_CART,
    product
  });

export const removeFromCart = product => dispatch =>
  dispatch({
    type: ACTION_TYPES.REMOVE_FROM_CART,
    product
  });
