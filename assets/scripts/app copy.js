

class Shop{
  constructor(){
    this.render()
  }
  render(){
  this.cart = new ShoppingCart('app')
  new ProductList('app')
  }
}

class App {
  static init(){
    const shop = new Shop()
    this.cart = shop.cart
  }
}

App.init()