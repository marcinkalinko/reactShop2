import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../../actions";
import styles from "./Products.module.css";

let Product = ({ price, name, image, id, addToCart }) => {
  const addProductToCart = () => {
    addToCart({ price, name, image, id });
  };

  return (
    <div className={styles.Product}>
      <img src={image} alt={name} className={styles.Image} />
      <p className={styles.Price}>${price}</p>
      <h3>{name}</h3>
      <button className={styles.Button} onClick={addProductToCart}>
        Add to cart
      </button>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string
};

const mapDispatchToProps = {
  addToCart
};

export default (Product = connect(
  null,
  mapDispatchToProps
)(Product));
