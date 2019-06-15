import React from "react";
import Container from "../Container/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Nav.module.css";

let Nav = ({ cartProducts }) => {
  const totalPrice = cartProducts
    .map(product => product.price)
    .reduce((previousValue, currentValue) => previousValue + +currentValue, 0);

  return (
    <nav className={styles.Navbar}>
      <Container>
        <div className={styles.Navbar__container}>
          <ul className={styles.Nav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className={styles.Cart}>
            <Link to="/cart">
              <p className={styles.CartInfo}>
                Products in cart:{" "}
                <span className={styles.CartItem}>{cartProducts.length}</span>
              </p>
              <p className={styles.CartInfo}>
                Total price:{" "}
                <span className={styles.CartItem}>
                  {parseFloat(totalPrice).toFixed(2)} $
                </span>
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

const mapStateToProps = state => ({
  cartProducts: state.cartProducts
});

export default (Nav = connect(mapStateToProps)(Nav));
