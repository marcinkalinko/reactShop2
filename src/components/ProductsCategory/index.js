import React from "react";
import PropTypes from "prop-types";
import Product from "../Product/Product";
import HeaderSmall from "../Header/HeaderSmall";
import styles from "./ProductsCategory.module.css";

const ProductsCategory = ({ title, products }) => {
  return (
    <section>
      <HeaderSmall>{title}</HeaderSmall>
      <div className={styles.Products}>
        {products.map(product => (
          <Product
            image={product.image}
            price={product.amount}
            name={product.name}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
};

ProductsCategory.propTypes = {
  products: PropTypes.array
};

export default ProductsCategory;
