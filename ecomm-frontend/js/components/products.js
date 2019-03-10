class Products {
  constructor() {
    this.products = [];
    this.adapter = new ProductsAdapter();
    this.initbindEventListeners();
    this.fetchAndLoadProducts();
  }

  initbindEventListeners() {
    this.productsContainer = document.getElementById('products-container')
  }

  fetchAndLoadProducts() {
    this.adapter
      .getProducts()
      .then(products => {
        products.forEach(product => this.products.push(new Product(product)))
      })
      .then(() => {
        this.render()
      });
  }

  render() {
    this.productsContainer.innerHTML = this.products.map(product => product.renderCard()).join('')
  }
}
