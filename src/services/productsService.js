class ProductsService {
  static getFeaturedDesktops(products) {
    return products.filter(
      product => product.category === "desktop" && product.featured
    );
  }

  static getFeaturedTablets(products) {
    return products.filter(
      product => product.category === "tablet" && product.featured
    );
  }

  static getProducents(products) {
    const producents = products
      .map(product => product.manufacture)
      .filter(
        (manufacture, index, manufactures) =>
          manufactures.indexOf(manufacture) === index
      );

    return ['All', ...producents];
  }

  static filterByProducent(producent, products) {
    return products.filter(product => product.manufacture === producent);
  }

  static filterByName(name, products) {
    return products.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}

export default ProductsService;
