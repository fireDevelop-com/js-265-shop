class ShoppingCart extends Components{
  constructor(app){
    super(app, false)
    this.orderProducts = () => {console.log('ordering...'); console.log(this.items)}
    this.render()
  }
}

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