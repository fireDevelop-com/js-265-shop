class ShoppingCart extends Component{
  constructor(app){
    super(app, false)
    this.orderProducts = () => {console.log('ordering...'); console.log(this.items)}
    this.render() 
  }
  items = []
  render(){
    const createRootElement = this.createRootElement('section', 'cart')
    createRootElement.innerHTML = `<h2>Total: \$${0}</h2><button>Order Now!</button>`
    const orderButton = createRootElement.querySelector('button')
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