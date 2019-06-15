import { connect } from "react-redux";

import Nav from "../components/Nav/Nav";

const mapStateToProps = state => ({
  cartProducts: state.cartProducts
});

const HeaderContainer = connect(mapStateToProps)(Nav);

export default HeaderContainer;
