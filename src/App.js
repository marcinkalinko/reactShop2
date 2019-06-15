import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";
import Container from "./components/Container";
import HomePage from "./pages/Home/index";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog/index";
import About from "./pages/About";
import Footer from "./components/Footer";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <Container>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
      </Container>
      <Footer />
    </Provider>
  );
};

export default App;
