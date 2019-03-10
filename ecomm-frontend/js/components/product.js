class Product {
  constructor(productJSON) {
    this.id = productJSON.id
    this.name = productJSON.name
    this.price = productJSON.price
    this.description = productJSON.description
    this.instock = productJSON.instock
  }

  renderLi() {
    return `<div class="row">
      <div class="col s3 m4 l3">
        <div class="card grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${this.name}</span>
            <p>Description: ${this.description} </p>
              <p>Price: ${this.price}</p>
              <p>Instock: ${this.instock}</p>

            </div>
          </div>
        </div>
      </div>`
  }
}