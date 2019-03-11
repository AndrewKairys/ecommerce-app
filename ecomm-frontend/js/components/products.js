class Products {
  constructor() {
    this.products = [];
    this.adapter = new ProductsAdapter();
    this.initbindEventListeners();
    this.fetchAndLoadProducts();
  }

  initbindEventListeners() {
    this.productsContainer = document.getElementById('products-container')
    this.newProduct
    this.productForm = document.getElementById('new-product-form')
    this.productForm.addEventListener('submit', this.createProduct)
  }

  createProduct(e) {
    e.preventDefault()
    const value = this.newProduct.value

    this.adapter.createProduct(value).then(product => {
      this.notes.push(new Product(product))
      this.newProduct.value = ''
      this.render()
    })
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
