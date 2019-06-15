import { connect } from "react-redux";

import Product from "../components/shared/Product";

import { addToCart } from "../actions";

const mapDispatchToProps = {
    addToCart
};

const ProductContainer = connect(
    null,
    mapDispatchToProps
)(Product);


export default ProductContainer;