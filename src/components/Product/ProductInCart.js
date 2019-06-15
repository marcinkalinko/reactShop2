import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions";
import styles from "./Products.module.css";

let ProductInCart = ({ price, name, image, id, removeFromCart }) => {
  const removeProductFromCart = () => {
    removeFromCart({ name });
  };

  return (
    <div className={styles.ProductAtCart}>
      <img src={image} alt={name} className={styles.ImageAtCart} />
      <p className={styles.Price}>${price}</p>
      <h3>{name}</h3>
      <div>
        <button className={styles.Button} onClick={removeProductFromCart}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

ProductInCart.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string
};

const mapDispatchToProps = {
  removeFromCart
};

export default (ProductInCart = connect(
  null,
  mapDispatchToProps
)(ProductInCart));
