import React, { useEffect, useState } from "react";
import ProductsService from "../../services/productsService";
import HeaderBig from "../Header/HeaderBig";
import SearchPanel from "../SearchPanel/index";
import Product from "../Product/Product";
import styles from "./Catalog.module.css";

const Catalog = ({
  getProducts,
  productsData: { products, isError, isLoading }
}) => {
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (!tempProducts.length && !tempProductsStatus && products.length) {
      setTempProducts(products);
      setTempProductsStatus(true);
    }
  });

  const [tempProducts, setTempProducts] = useState(products);
  const [tempProductsStatus, setTempProductsStatus] = useState(false);

  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const updateProducts = (producent, name) => {
    let filteredProducts = products;

    if (producent !== "All") {
      filteredProducts = ProductsService.filterByProducent(
        producent,
        filteredProducts
      );
    }

    if (name) {
      filteredProducts = ProductsService.filterByName(name, filteredProducts);
    }

    setTempProducts(filteredProducts);
  };

  const producentsOptions = ProductsService.getProducents(products);

  return (
    <>
      <HeaderBig>Catalog</HeaderBig>
      <div className={styles.Catalog}>
        <div className={styles.ColumnLeft}>
          <SearchPanel
            onOptionChange={updateProducts}
            producentsOptions={producentsOptions}
          />
        </div>
        <div className={styles.ColumnRight}>
          {tempProducts.map(product => (
            <Product
              name={product.name}
              price={product.amount}
              image={product.image}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
