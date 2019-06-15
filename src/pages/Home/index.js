import React, { useEffect } from "react";
import ProductsService from "../../services/productsService";
import HeaderBig from "../../components/Header/HeaderBig";
import ProductsCategory from "../../components/ProductsCategory/index";
import { connect } from "react-redux";
import { getProducts } from "../../actions";

let Home = ({
  getProducts,
  productsData: { products, isError, isLoading }
}) => {
  useEffect(() => {
    getProducts();
  }, []);

  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const desktops = ProductsService.getFeaturedDesktops(products);
  const tablets = ProductsService.getFeaturedTablets(products);

  return (
    <>
      <HeaderBig>Welcome to our store</HeaderBig>
      <ProductsCategory title="Desktops" products={desktops} />
      <ProductsCategory title="Tablets" products={tablets} />
    </>
  );
};

const mapStateToProps = state => ({
  productsData: state.productsData
});

const mapDispatchToProps = {
  getProducts
};

export default (Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
