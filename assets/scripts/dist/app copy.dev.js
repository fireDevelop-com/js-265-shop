"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shop =
/*#__PURE__*/
function () {
  function Shop() {
    _classCallCheck(this, Shop);

    this.render();
  }

  _createClass(Shop, [{
    key: "render",
    value: function render() {
      this.cart = new ShoppingCart('app');
      new ProductList('app');
    }
  }]);

  return Shop;
}();

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, null, [{
    key: "init",
    value: function init() {
      var shop = new Shop();
      this.cart = shop.cart;
    }
  }]);

  return App;
}();

App.init();