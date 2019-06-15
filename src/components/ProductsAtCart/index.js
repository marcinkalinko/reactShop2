import React from "react";
import PropTypes from "prop-types";
import ProductInCart from "../Product/ProductInCart";
import HeaderSmall from "../Header/HeaderSmall";
import styles from "./ProductsAtCart.module.css";

const ProductsAtCart = ({ title, products }) => {
  return (
    <section>
      <HeaderSmall>{title}</HeaderSmall>
      {console.log(products)}

      <div className={styles.Products}>
        {products.map(product => (
          <ProductInCart
            key={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
          />
        ))}
      </div>
    </section>
  );
};

ProductsAtCart.propTypes = {
  products: PropTypes.array
};

export default ProductsAtCart;
