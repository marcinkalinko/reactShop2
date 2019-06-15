import React from "react";
import HeaderBig from "../../components/Header/HeaderBig";
import { connect } from "react-redux";
import ProductsAtCart from "../../components/ProductsAtCart/index";

let Cart = ({ cartProducts }) => {
  const isCartEmpty = cartProducts.length > 0;

  return (
    <>
      <HeaderBig>Cart</HeaderBig>
      {isCartEmpty ? (
        <ProductsAtCart title="At your cart:" products={cartProducts} />
      ) : (
        <h2>Your cart is empty. Please add some products...</h2>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  cartProducts: state.cartProducts
});

export default (Cart = connect(mapStateToProps)(Cart));
